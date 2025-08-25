"use client"

import { useState, useEffect } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

interface ProductDimensions {
  size: string
  chest?: number
  length: number
  sleeve?: number
  shoulder?: number
  waist?: number
  inseam?: number
}

interface SizingAgentModalProps {
  productName: string
  productSizes: string[]
  productDimensions: ProductDimensions[]
  fitFactor: number // 1-5 scale: 1=tight, 3=regular, 5=baggy
  onClose: () => void
  onRecommendSize: (recommendedSize: string) => void
}

interface UserMeasurements {
  height: { feet: number; inches: number }
  weight: number
  gender: string
  fitPreference: string
  usualSize: string
  chest: string
  stomach: string
  seat: string
  torsoLength: string
  legLength: string
  shoulders: string
  preferMetric: boolean
}

const FIT_VISUALS = {
  "Very Fitted": "M12 8v8M8 12h8",
  "Regular Fit": "M9 9h6v6H9z",
  "Relaxed Fit": "M7 7h10v10H7z"
}

export default function SizingAgentModal({
  productName,
  productSizes,
  productDimensions,
  fitFactor,
  onClose,
  onRecommendSize
}: SizingAgentModalProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [userMeasurements, setUserMeasurements] = useState<UserMeasurements>({
    height: { feet: 5, inches: 4 },
    weight: 120,
    gender: "",
    fitPreference: "",
    usualSize: "",
    chest: "",
    stomach: "",
    seat: "",
    torsoLength: "",
    legLength: "",
    shoulders: "",
    preferMetric: false
  })

  const isUpperBodyProduct = ["Heavyweight Hoodie", "Heavyweight Crewneck", "Classic Quarterzip", "Classic Tshirt"].includes(productName)
  const isLowerBodyProduct = ["Straightcut Sweatpants"].includes(productName)

  const totalSteps = isUpperBodyProduct ? 6 : isLowerBodyProduct ? 5 : 6

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }
    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [onClose])

  const updateMeasurement = (field: keyof UserMeasurements, value: unknown) => {
    setUserMeasurements(prev => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const calculateRecommendation = (): string => {
    const heightInInches = userMeasurements.height.feet * 12 + userMeasurements.height.inches
    const weight = userMeasurements.weight
    
    const heightToWeightRatio = heightInInches / weight;
    const buildType = heightToWeightRatio < 0.45 ? 'Stocky' : heightToWeightRatio > 0.55 ? 'Lean' : 'Average';
    
    // Define gender-neutral reference points for unisex products
    // Instead of using gender-specific multipliers, we'll use a unified approach with gender-appropriate reference points
    const genderReferences = {
      "Male": { baseHeight: 69, baseWeight: 160 }, // 5'9" and 160 lbs - average adult male
      "Female": { baseHeight: 63, baseWeight: 125 }, // 5'3" and 125 lbs - adjusted for better petite sizing
      "Prefer not to say": { baseHeight: 66, baseWeight: 145 } // Middle ground
    }
    
    // Make reference available in the outer scope for debug output
    const reference = genderReferences[userMeasurements.gender as keyof typeof genderReferences] || genderReferences["Prefer not to say"]
    
    // Helper function to calculate target measurements based on user profile
    const calculateTargetMeasurements = () => {
      const targets: any = {}
      
      
      // Calculate target chest (for upper body products)
      // Adjust formula to better account for height-to-weight ratio
      const heightToWeightRatio = heightInInches / weight
      const isStockyBuild = heightToWeightRatio < 0.45 // Threshold for stocky builds
      
      // For stockier builds, reduce the weight influence to prevent oversizing
      const baseWeightFactor = isStockyBuild ? 0.035 : 0.05
      
      // Base chest size for average person of this gender
      const baseChest = userMeasurements.gender === "Female" ? 16 : 19
      
      // Calculate chest using gender-appropriate reference points with progressive scaling
      // Use a non-linear weight factor that increases with weight to avoid undersizing larger users
      // while properly sizing petite users
      const weightDiff = weight - reference.baseWeight;
      const weightFactor = weightDiff >= 0 ? baseWeightFactor : baseWeightFactor * 0.8; // Reduced impact for below-reference weight
      
      targets.chest = baseChest + 
                     (heightInInches - reference.baseHeight) * 0.15 + 
                     weightDiff * weightFactor
      
      // For quarter-zip products, calculate full circumference target (double the half-chest)
      targets.chestFull = targets.chest * 2
      
      // Calculate target waist (for lower body products)
      // Apply the same height-to-weight ratio adjustment for waist
      // Note: Sweatpants measurements appear to be full waist circumference, not half-waist
      // Target: 5'10" 150lb male should get Medium (27.6")
      const baseWaist = userMeasurements.gender === "Female" ? 25 : 27.5 // Calibrated for Medium at reference
      const adjustedWaistWeightFactor = isStockyBuild ? 0.05 : 0.06 // Reduced for better calibration
      
      // Use the same progressive scaling for waist as we did for chest
      const waistWeightFactor = weightDiff >= 0 ? adjustedWaistWeightFactor : adjustedWaistWeightFactor * 0.8;
      
      targets.waist = baseWaist + 
                     (heightInInches - reference.baseHeight) * 0.15 + 
                     weightDiff * waistWeightFactor
      
      // Calculate target shoulder
      const baseShoulder = userMeasurements.gender === "Female" ? 14.5 : 17
      
      // Use progressive scaling for shoulder measurements too
      const shoulderWeightFactor = weightDiff >= 0 ? 0.01 : 0.008;
      
      targets.shoulder = baseShoulder + 
                        (heightInInches - reference.baseHeight) * 0.08 + 
                        weightDiff * shoulderWeightFactor
      
      // Calculate target sleeve length based on height primarily
      targets.sleeve = 6.8 + (heightInInches - reference.baseHeight) * 0.08
      
      // Calculate target length based on torso description and height
      // Improved formula with stronger height influence for taller individuals
      const baseLength = userMeasurements.gender === "Female" ? 23 : 27
      
      targets.length = baseLength + (heightInInches - reference.baseHeight) * 0.2
      
      return targets
    }
    
    const targetMeasurements = calculateTargetMeasurements()
    
    // Apply body attribute adjustments
    const bodyAdjustments = {
      chest: {
        "Narrow/Small": -1.5,
        "Normal/Average": 0,
        "Broad/Large": 2.0
      },
      stomach: {
        "Narrow/Small": -1.0,
        "Normal/Average": 0,
        "Broad/Large": 1.5
      },
      shoulders: {
        "Narrow/Small": -1.0,
        "Normal/Average": 0,
        "Broad/Large": 1.8
      },
      seat: {
        "Narrow/Small": -1.0,
        "Normal/Average": 0,
        "Broad/Large": 1.5
      },
      torsoLength: {
        "Short": -0.8,
        "Normal/Average": 0,
        "Long": 1.2
      },
      legLength: {
        "Short": -1.0,
        "Normal/Average": 0,
        "Long": 1.5
      }
    }
    
    // Apply body adjustments
    const chestAdj = (bodyAdjustments.chest[userMeasurements.chest as keyof typeof bodyAdjustments.chest] || 0) +
                     (bodyAdjustments.stomach[userMeasurements.stomach as keyof typeof bodyAdjustments.stomach] || 0)
    
    targetMeasurements.chest += chestAdj
    targetMeasurements.chestFull += chestAdj * 2 // Apply to full chest measurement too
    targetMeasurements.shoulder += bodyAdjustments.shoulders[userMeasurements.shoulders as keyof typeof bodyAdjustments.shoulders] || 0
    targetMeasurements.waist += bodyAdjustments.stomach[userMeasurements.stomach as keyof typeof bodyAdjustments.stomach] || 0
    targetMeasurements.waist += bodyAdjustments.seat[userMeasurements.seat as keyof typeof bodyAdjustments.seat] || 0
    targetMeasurements.length += bodyAdjustments.torsoLength[userMeasurements.torsoLength as keyof typeof bodyAdjustments.torsoLength] || 0
    
    // Apply garment fit factor adjustments (1-5 scale: 1=tight, 3=regular, 5=baggy)
    // This adjustment happens before user fit preference to account for the garment's inherent fit
    // Scale fit adjustments based on user size to avoid oversizing petite users
    const isSmallUser = userMeasurements.gender === "Female" && weight < 120;
    const fitScaleFactor = isSmallUser ? 0.7 : 1.0; // Reduce fit adjustments for petite users
    
    const garmentFitAdjustments = {
      // Map the 1-5 scale to specific measurement adjustments (reduced magnitude)
      1: { chest: -1.0 * fitScaleFactor, waist: -1.0 * fitScaleFactor, shoulder: -0.4 * fitScaleFactor, length: -0.25 * fitScaleFactor }, // Very tight fit
      2: { chest: -0.5 * fitScaleFactor, waist: -0.5 * fitScaleFactor, shoulder: -0.2 * fitScaleFactor, length: -0.12 * fitScaleFactor }, // Slightly fitted
      3: { chest: 0, waist: 0, shoulder: 0, length: 0 },             // Regular fit (baseline)
      4: { chest: 0.6 * fitScaleFactor, waist: 0.6 * fitScaleFactor, shoulder: 0.2 * fitScaleFactor, length: 0.12 * fitScaleFactor },   // Relaxed fit
      5: { chest: 1.2 * fitScaleFactor, waist: 1.2 * fitScaleFactor, shoulder: 0.4 * fitScaleFactor, length: 0.25 * fitScaleFactor }      // Baggy/oversized fit
    }
    
    // Get the garment fit adjustment based on the fitFactor (default to 3/regular if out of range)
    const validFitFactor = fitFactor >= 1 && fitFactor <= 5 ? fitFactor : 3;
    const garmentFitAdjustment = garmentFitAdjustments[validFitFactor as keyof typeof garmentFitAdjustments];
    
    // Apply garment fit adjustments to measurements
    Object.keys(garmentFitAdjustment).forEach(key => {
      const adjustmentValue = garmentFitAdjustment[key as keyof typeof garmentFitAdjustment];
      if (adjustmentValue !== 0 && targetMeasurements[key] !== undefined) {
        targetMeasurements[key] += adjustmentValue;
        
        // Also apply to full chest measurement for quarter-zip products
        if (key === 'chest' && targetMeasurements.chestFull !== undefined) {
          targetMeasurements.chestFull += adjustmentValue * 2;
        }
      }
    })
    
    // Apply user fit preference adjustments (after garment fit factor)
    // Using more moderate adjustments to prevent extreme size jumps
    // Scale user fit preference adjustments based on user size to avoid oversizing petite users
    const userFitAdjustments = {
      "Very Fitted": { chest: -0.8 * fitScaleFactor, waist: -0.8 * fitScaleFactor, shoulder: -0.3 * fitScaleFactor, length: 0 },
      "Regular Fit": { chest: 0, waist: 0, shoulder: 0, length: 0 },
      "Relaxed Fit": { chest: 0.9 * fitScaleFactor, waist: 0.9 * fitScaleFactor, shoulder: 0.35 * fitScaleFactor, length: 0.18 * fitScaleFactor }
    }
    
    const userFitAdjustment = userFitAdjustments[userMeasurements.fitPreference as keyof typeof userFitAdjustments] || userFitAdjustments["Regular Fit"]
    
    // Apply user fit preference adjustments
    Object.keys(userFitAdjustment).forEach(key => {
      const adjustmentValue = userFitAdjustment[key as keyof typeof userFitAdjustment];
      if (adjustmentValue !== 0 && targetMeasurements[key] !== undefined) {
        targetMeasurements[key] += adjustmentValue;
        
        // Also apply to full chest measurement for quarter-zip products
        if (key === 'chest' && targetMeasurements.chestFull !== undefined) {
          targetMeasurements.chestFull += adjustmentValue * 2;
        }
      }
    })
    
    // Multi-factor scoring system for each size
    
    const sizeScores = productDimensions.map(dimension => {
      let totalScore = 0
      let factorCount = 0
      const detailedScores: Record<string, {actual: number, target: number, diff: number, score: number, weight: number, weightedScore: number}> = {}
      
      // Chest scoring (secondary importance)
      if (dimension.chest && targetMeasurements.chest) {
        // Detect if this is a quarter-zip with full circumference measurements
        const isQuarterZip = dimension.chest > 35 // Quarter-zip measurements are much larger
        const targetChest = isQuarterZip ? targetMeasurements.chestFull : targetMeasurements.chest
        const chestDiff = Math.abs(dimension.chest - targetChest)
        const chestScore = Math.max(0, 100 - (chestDiff * 15)) // Higher penalty for chest mismatch
        const chestWeight = 2; // 2x weight for chest
        const weightedChestScore = chestScore * chestWeight;
        
        totalScore += weightedChestScore
        factorCount += chestWeight
        
        detailedScores.chest = {
          actual: dimension.chest,
          target: targetChest,
          diff: chestDiff,
          score: chestScore,
          weight: chestWeight,
          weightedScore: weightedChestScore
        }
      }
      
      // Waist scoring (secondary importance for lower body)
      if (dimension.waist && targetMeasurements.waist) {
        const waistDiff = Math.abs(dimension.waist - targetMeasurements.waist)
        const waistScore = Math.max(0, 100 - (waistDiff * 15))
        const waistWeight = 2; // 2x weight for waist
        const weightedWaistScore = waistScore * waistWeight;
        
        totalScore += weightedWaistScore
        factorCount += waistWeight
        
        detailedScores.waist = {
          actual: dimension.waist,
          target: targetMeasurements.waist,
          diff: waistDiff,
          score: waistScore,
          weight: waistWeight,
          weightedScore: weightedWaistScore
        }
      }
      
      // Shoulder scoring (lower importance)
      if (dimension.shoulder && targetMeasurements.shoulder) {
        const shoulderDiff = Math.abs(dimension.shoulder - targetMeasurements.shoulder)
        const shoulderScore = Math.max(0, 100 - (shoulderDiff * 20)) // Higher penalty for shoulder
        const shoulderWeight = 1; // 1x weight for shoulders
        const weightedShoulderScore = shoulderScore * shoulderWeight;
        
        totalScore += weightedShoulderScore
        factorCount += shoulderWeight
        
        detailedScores.shoulder = {
          actual: dimension.shoulder,
          target: targetMeasurements.shoulder,
          diff: shoulderDiff,
          score: shoulderScore,
          weight: shoulderWeight,
          weightedScore: weightedShoulderScore
        }
      }
      
      // Length scoring (HIGHEST importance for ALL garments)
      if (dimension.length && targetMeasurements.length) {
        const lengthDiff = Math.abs(dimension.length - targetMeasurements.length)
        // Higher penalty for length mismatch and increased importance
        const lengthScore = Math.max(0, 100 - (lengthDiff * 15))
        const lengthWeight = 5; // 5x weight for length (MOST critical factor)
        const weightedLengthScore = lengthScore * lengthWeight;
        
        totalScore += weightedLengthScore
        factorCount += lengthWeight
        
        detailedScores.length = {
          actual: dimension.length,
          target: targetMeasurements.length,
          diff: lengthDiff,
          score: lengthScore,
          weight: lengthWeight,
          weightedScore: weightedLengthScore
        }
      }
      
      // Sleeve scoring (lowest importance)
      if (dimension.sleeve && targetMeasurements.sleeve) {
        const sleeveDiff = Math.abs(dimension.sleeve - targetMeasurements.sleeve)
        const sleeveScore = Math.max(0, 100 - (sleeveDiff * 10))
        const sleeveWeight = 0.5; // 0.5x weight for sleeve
        const weightedSleeveScore = sleeveScore * sleeveWeight;
        
        totalScore += weightedSleeveScore
        factorCount += sleeveWeight
        
        detailedScores.sleeve = {
          actual: dimension.sleeve,
          target: targetMeasurements.sleeve,
          diff: sleeveDiff,
          score: sleeveScore,
          weight: sleeveWeight,
          weightedScore: weightedSleeveScore
        }
      }
      
      // Usual size bonus (strong anchor)
      if (userMeasurements.usualSize === dimension.size) {
        // Reduce the usual size bonus for petite users with baggy garments to avoid oversizing
        const isSmallUserWithBaggyGarment = isSmallUser && fitFactor > 3;
        const usualSizeBonus = isSmallUserWithBaggyGarment ? 20 : 30; // Reduced bonus for petite users with baggy garments
        const usualSizeWeight = 0.5;
        totalScore += usualSizeBonus
        factorCount += usualSizeWeight
        
        detailedScores.usualSizeBonus = {
          actual: 0, // Not applicable for usual size bonus
          target: 0, // Not applicable for usual size bonus
          diff: 0,
          score: usualSizeBonus,
          weight: usualSizeWeight,
          weightedScore: usualSizeBonus
        }
      }
      
      // Calculate final normalized score
      const finalScore = factorCount > 0 ? totalScore / factorCount : 0;
      
      
      return {
        size: dimension.size,
        score: finalScore,
        dimension,
        // Add comprehensive detailed scoring breakdown for debugging
        details: detailedScores
      }
    })
    
    // Sort by score and get the best recommendation
    sizeScores.sort((a, b) => b.score - a.score)
    
    // Store the raw recommendation before usual size adjustment
    const rawRecommendedSize = sizeScores[0].size
    
    // Apply final adjustments based on fit preference and usual size relationship
    let bestSize = rawRecommendedSize
    
    if (userMeasurements.usualSize && productSizes.includes(userMeasurements.usualSize)) {
      const usualIndex = productSizes.indexOf(userMeasurements.usualSize)
      const recommendedIndex = productSizes.indexOf(bestSize)
      
      // If the algorithm suggests a very different size from usual, be more conservative
      if (Math.abs(usualIndex - recommendedIndex) >= 2) {
        // Moderate the recommendation towards usual size
        const originalSize = bestSize
        if (recommendedIndex > usualIndex) {
          bestSize = productSizes[Math.min(usualIndex + 1, productSizes.length - 1)]
        } else {
          bestSize = productSizes[Math.max(usualIndex - 1, 0)]
        }
        
        // Log the adjustment
      }
    }
    
    
    return bestSize
  }

  const handleGetSize = () => {
    const recommendedSize = calculateRecommendation()
    onRecommendSize(recommendedSize)
    onClose()
  }

  const renderProgressBar = () => (
    <div className="w-full bg-gray-200 h-1 mb-8">
      <div 
        className="bg-black h-1 progress-bar-fill"
        style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
      />
    </div>
  )

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-lg font-medium mb-2">Let's find your perfect size for</h2>
              <h1 className="text-xl font-bold uppercase">{productName}</h1>
            </div>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-xs uppercase mb-2">Height</label>
                  <div className="flex gap-2">
                    <select 
                      value={userMeasurements.height.feet}
                      onChange={(e) => updateMeasurement('height', { ...userMeasurements.height, feet: parseInt(e.target.value) })}
                      className="border border-gray-300 px-3 py-2 text-xs"
                    >
                      {[4, 5, 6, 7].map(ft => (
                        <option key={ft} value={ft}>{ft} ft</option>
                      ))}
                    </select>
                    <select 
                      value={userMeasurements.height.inches}
                      onChange={(e) => updateMeasurement('height', { ...userMeasurements.height, inches: parseInt(e.target.value) })}
                      className="border border-gray-300 px-3 py-2 text-xs"
                    >
                      {Array.from({length: 12}, (_, i) => (
                        <option key={i} value={i}>{i} in</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div className="flex-1">
                  <label className="block text-xs uppercase mb-2">Weight (lbs)</label>
                  <input
                    type="number"
                    value={userMeasurements.weight}
                    onChange={(e) => updateMeasurement('weight', parseInt(e.target.value))}
                    className="w-full border border-gray-300 px-3 py-2 text-xs"
                    min="80"
                    max="400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase mb-2">Gender (for fit guidance)</label>
                <div className="flex flex-wrap gap-2">
                  {["Male", "Female", "Prefer not to say"].map(gender => (
                    <button
                      key={gender}
                      onClick={() => updateMeasurement('gender', gender)}
                      className={`px-4 py-2 text-xs border sizing-option-button flex-1 min-w-[80px] ${userMeasurements.gender === gender ? 'border-black bg-black text-white' : 'border-gray-300'}`}
                    >
                      {gender}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )

      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-lg font-medium text-center">How do you like your clothes to fit?</h2>
            
            <div className="space-y-4">
              {Object.entries(FIT_VISUALS).map(([fit, path]) => (
                <button
                  key={fit}
                  onClick={() => updateMeasurement('fitPreference', fit)}
                  className={`w-full p-4 border flex items-center gap-4 sizing-option-button ${userMeasurements.fitPreference === fit ? 'border-black bg-gray-50' : 'border-gray-300'}`}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="fit-visual-icon">
                    <path d={path} />
                  </svg>
                  <span className="text-xs uppercase">{fit}</span>
                </button>
              ))}
            </div>

            <div>
              <label className="block text-xs uppercase mb-2">
                What size do you usually wear in {productName.toLowerCase()}s from other brands?
              </label>
              <select
                value={userMeasurements.usualSize}
                onChange={(e) => updateMeasurement('usualSize', e.target.value)}
                className="w-full border border-gray-300 px-3 py-2 text-xs"
              >
                <option value="">Select your usual size</option>
                {productSizes.map(size => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>
          </div>
        )

      case 2:
        if (isLowerBodyProduct) {
          // Skip chest question for sweatpants, go directly to seat/hips
          return (
            <div className="space-y-6">
              <h2 className="text-lg font-medium text-center">How would you describe your seat/hips?</h2>
              <div className="flex justify-center mb-4">
                <div className="relative w-32 h-32">
                  <Image
                    src="/sizing/hip.jpg"
                    alt="Hip measurement reference"
                    fill
                    className="object-contain"
                    sizes="128px"
                  />
                </div>
              </div>
              <div className="space-y-2">
                {["Narrow/Small", "Normal/Average", "Broad/Large"].map(option => (
                  <button
                    key={option}
                    onClick={() => updateMeasurement('seat', option)}
                    className={`w-full p-3 text-xs border sizing-option-button ${userMeasurements.seat === option ? 'border-black bg-black text-white' : 'border-gray-300'}`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )
        } else {
          // Upper body products still get chest question
          return (
            <div className="space-y-6">
              <h2 className="text-lg font-medium text-center">How would you describe your chest?</h2>
              <div className="flex justify-center mb-4">
                <div className="relative w-32 h-32">
                  <Image
                    src="/sizing/chest.jpg"
                    alt="Chest measurement reference"
                    fill
                    className="object-contain"
                    sizes="128px"
                  />
                </div>
              </div>
              <div className="space-y-2">
                {["Narrow/Small", "Normal/Average", "Broad/Large"].map(option => (
                  <button
                    key={option}
                    onClick={() => updateMeasurement('chest', option)}
                    className={`w-full p-3 text-xs border sizing-option-button ${userMeasurements.chest === option ? 'border-black bg-black text-white' : 'border-gray-300'}`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )
        }

      case 3:
        if (isLowerBodyProduct) {
          // For sweatpants, ask about leg length
          return (
            <div className="space-y-6">
              <h2 className="text-lg font-medium text-center">How would you describe your leg length?</h2>
              <div className="flex justify-center mb-4">
                <div className="relative w-32 h-32">
                  <Image
                    src="/sizing/pant_length.jpg"
                    alt="Pant length measurement reference"
                    fill
                    className="object-contain"
                    sizes="128px"
                  />
                </div>
              </div>
              <div className="space-y-2">
                {["Short", "Normal/Average", "Long"].map(option => (
                  <button
                    key={option}
                    onClick={() => updateMeasurement('legLength', option)}
                    className={`w-full p-3 text-xs border sizing-option-button ${userMeasurements.legLength === option ? 'border-black bg-black text-white' : 'border-gray-300'}`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )
        } else {
          // For upper body products, ask about stomach
          return (
            <div className="space-y-6">
              <h2 className="text-lg font-medium text-center">How would you describe your stomach/waist area?</h2>
              <div className="flex justify-center mb-4">
                <div className="relative w-32 h-32">
                  <Image
                    src="/sizing/waist.jpg"
                    alt="Waist measurement reference"
                    fill
                    className="object-contain"
                    sizes="128px"
                  />
                </div>
              </div>
              <div className="space-y-2">
                {["Narrow/Small", "Normal/Average", "Broad/Large"].map(option => (
                  <button
                    key={option}
                    onClick={() => updateMeasurement('stomach', option)}
                    className={`w-full p-3 text-xs border sizing-option-button ${userMeasurements.stomach === option ? 'border-black bg-black text-white' : 'border-gray-300'}`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )
        }

      case 4:
        if (isUpperBodyProduct) {
          return (
            <div className="space-y-6">
              <h2 className="text-lg font-medium text-center">How would you describe your shoulders?</h2>
              <div className="flex justify-center mb-4">
                <div className="relative w-32 h-32">
                  <Image
                    src="/sizing/shoulder.jpg"
                    alt="Shoulder measurement reference"
                    fill
                    className="object-contain"
                    sizes="128px"
                  />
                </div>
              </div>
              <div className="space-y-2">
                {["Narrow/Small", "Normal/Average", "Broad/Large"].map(option => (
                  <button
                    key={option}
                    onClick={() => updateMeasurement('shoulders', option)}
                    className={`w-full p-3 text-xs border sizing-option-button ${userMeasurements.shoulders === option ? 'border-black bg-black text-white' : 'border-gray-300'}`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )
        } else if (isLowerBodyProduct) {
          // Final recommendation step for sweatpants
          const recommendedSize = calculateRecommendation()
          // Always recommend a size above for baggier fit option
          const baggierSize = productSizes.indexOf(recommendedSize) < productSizes.length - 1 ? 
            productSizes[productSizes.indexOf(recommendedSize) + 1] : null

          return (
            <div className="space-y-6 text-center">
              <div>
                <h2 className="text-lg font-medium mb-4">Perfect! We found your size.</h2>
                <div className="bg-gray-50 p-6 rounded">
                  <p className="text-xs mb-2">Based on your preferences for a {userMeasurements.fitPreference.toLowerCase()}, we recommend:</p>
                  <div className="text-3xl font-bold my-4">{recommendedSize}</div>
                  <p className="text-xs">for your {productName}</p>
                </div>
              </div>
              
              {baggierSize && (
                <div className="text-xs">
                  <p>For a baggier fit, consider trying a <strong>{baggierSize}</strong>.</p>
                </div>
              )}
            </div>
          )
        }
        break

      case 5:
        // Final recommendation step for upper body
        const recommendedSize = calculateRecommendation()
        // Always recommend a size above for baggier fit option
        const baggierSize = productSizes.indexOf(recommendedSize) < productSizes.length - 1 ? 
          productSizes[productSizes.indexOf(recommendedSize) + 1] : null

        return (
          <div className="space-y-6 text-center">
            <div>
              <h2 className="text-lg font-medium mb-4">Perfect! We found your size.</h2>
              <div className="bg-gray-50 p-6 rounded size-recommendation">
                <p className="text-xs mb-2">Based on your preferences for a {userMeasurements.fitPreference.toLowerCase()}, we recommend:</p>
                <div className="text-3xl font-bold my-4">{recommendedSize}</div>
                <p className="text-xs">for your {productName}</p>
              </div>
            </div>
            
            {baggierSize && (
              <div className="text-xs">
                <p>For a baggier fit, consider trying a <strong>{baggierSize}</strong>.</p>
              </div>
            )}
          </div>
        )
    }
  }

  const canProceed = () => {
    switch (currentStep) {
      case 0: return userMeasurements.height.feet && userMeasurements.weight && userMeasurements.gender
      case 1: return userMeasurements.fitPreference && userMeasurements.usualSize
      case 2: 
        if (isLowerBodyProduct) return userMeasurements.seat
        return userMeasurements.chest
      case 3:
        if (isLowerBodyProduct) return userMeasurements.legLength
        return userMeasurements.stomach
      case 4: 
        if (isUpperBodyProduct) return userMeasurements.shoulders
        return true // Final step for sweatpants
      case 5: 
        return true // Final step for upper body
      default: return true
    }
  }

  const isLastStep = currentStep === totalSteps - 1

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-lg max-h-[90vh] overflow-auto sizing-agent-enter-active md:rounded-lg">
        {/* Header */}
        <div className="p-6 border-b">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xs text-gray-500">Step {currentStep + 1} of {totalSteps}</span>
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-100 transition-colors"
              aria-label="Close sizing agent"
            >
              <X size={20} />
            </button>
          </div>
          {renderProgressBar()}
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="step-content">
            {renderStep()}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t flex justify-between">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className={`flex items-center gap-2 px-4 py-2 text-xs ${currentStep === 0 ? 'text-gray-400' : 'text-black hover:bg-gray-50'}`}
          >
            <ChevronLeft size={16} />
            Back
          </button>
          
          {isLastStep ? (
            <button
              onClick={handleGetSize}
              className="stussy-button px-6 py-2"
            >
              Select This Size
            </button>
          ) : (
            <button
              onClick={nextStep}
              disabled={!canProceed()}
              className={`flex items-center gap-2 px-4 py-2 text-xs ${!canProceed() ? 'text-gray-400' : 'stussy-button'}`}
            >
              Next
              <ChevronRight size={16} />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}