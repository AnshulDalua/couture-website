"use client"

import { useState, useEffect } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

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
  onClose,
  onRecommendSize
}: SizingAgentModalProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [userMeasurements, setUserMeasurements] = useState<UserMeasurements>({
    height: { feet: 5, inches: 8 },
    weight: 150,
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

  const totalSteps = isUpperBodyProduct ? 6 : isLowerBodyProduct ? 6 : 5

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }
    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [onClose])

  const updateMeasurement = (field: keyof UserMeasurements, value: any) => {
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
    
    // Helper function to calculate target measurements based on user profile
    const calculateTargetMeasurements = () => {
      const targets: any = {}
      
      // Base calculations by gender with height and weight adjustments
      const genderMultipliers = {
        "Male": { base: 1.0, heightFactor: 0.5, weightFactor: 0.05 },
        "Female": { base: 0.9, heightFactor: 0.4, weightFactor: 0.04 },
        "Prefer not to say": { base: 0.95, heightFactor: 0.45, weightFactor: 0.045 }
      }
      
      const multiplier = genderMultipliers[userMeasurements.gender as keyof typeof genderMultipliers] || genderMultipliers["Prefer not to say"]
      
      // Calculate target chest (for upper body products)
      targets.chest = (18 + (heightInInches - 60) * multiplier.heightFactor + (weight - 140) * multiplier.weightFactor) * multiplier.base
      
      // For quarter-zip products, calculate full circumference target (double the half-chest)
      targets.chestFull = targets.chest * 2
      
      // Calculate target waist (for lower body products) 
      targets.waist = (14 + (heightInInches - 60) * 0.3 + (weight - 140) * 0.08) * multiplier.base
      
      // Calculate target shoulder
      targets.shoulder = (16 + (heightInInches - 60) * 0.2 + (weight - 140) * 0.02) * multiplier.base
      
      // Calculate target sleeve length based on height primarily
      targets.sleeve = 7 + (heightInInches - 60) * 0.15
      
      // Calculate target length based on torso description and height
      targets.length = 26 + (heightInInches - 60) * 0.2
      
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
    
    // Apply fit preference adjustments
    const fitAdjustments = {
      "Very Fitted": { chest: -1.5, waist: -1.5, shoulder: -0.5, length: 0 },
      "Regular Fit": { chest: 0, waist: 0, shoulder: 0, length: 0 },
      "Relaxed Fit": { chest: 2.5, waist: 2.5, shoulder: 1.0, length: 0.5 }
    }
    
    const fitAdjustment = fitAdjustments[userMeasurements.fitPreference as keyof typeof fitAdjustments] || fitAdjustments["Regular Fit"]
    
    Object.keys(fitAdjustment).forEach(key => {
      targetMeasurements[key] += fitAdjustment[key as keyof typeof fitAdjustment]
      // Also apply to full chest measurement for quarter-zip products
      if (key === 'chest') {
        targetMeasurements.chestFull += fitAdjustment[key] * 2
      }
    })
    
    // Multi-factor scoring system for each size
    const sizeScores = productDimensions.map(dimension => {
      let totalScore = 0
      let factorCount = 0
      
      // Chest scoring (most important for upper body)
      if (dimension.chest && targetMeasurements.chest) {
        // Detect if this is a quarter-zip with full circumference measurements
        const isQuarterZip = dimension.chest > 35 // Quarter-zip measurements are much larger
        const targetChest = isQuarterZip ? targetMeasurements.chestFull : targetMeasurements.chest
        const chestDiff = Math.abs(dimension.chest - targetChest)
        const chestScore = Math.max(0, 100 - (chestDiff * 15)) // Higher penalty for chest mismatch
        totalScore += chestScore * 3 // 3x weight for chest
        factorCount += 3
      }
      
      // Waist scoring (most important for lower body)
      if (dimension.waist && targetMeasurements.waist) {
        const waistDiff = Math.abs(dimension.waist - targetMeasurements.waist)
        const waistScore = Math.max(0, 100 - (waistDiff * 15))
        totalScore += waistScore * 3 // 3x weight for waist
        factorCount += 3
      }
      
      // Shoulder scoring (important for fit)
      if (dimension.shoulder && targetMeasurements.shoulder) {
        const shoulderDiff = Math.abs(dimension.shoulder - targetMeasurements.shoulder)
        const shoulderScore = Math.max(0, 100 - (shoulderDiff * 20)) // Higher penalty for shoulder
        totalScore += shoulderScore * 2 // 2x weight for shoulders
        factorCount += 2
      }
      
      // Length scoring (moderate importance)
      if (dimension.length && targetMeasurements.length) {
        const lengthDiff = Math.abs(dimension.length - targetMeasurements.length)
        const lengthScore = Math.max(0, 100 - (lengthDiff * 10))
        totalScore += lengthScore * 1.5 // 1.5x weight for length
        factorCount += 1.5
      }
      
      // Sleeve scoring (lower importance)
      if (dimension.sleeve && targetMeasurements.sleeve) {
        const sleeveDiff = Math.abs(dimension.sleeve - targetMeasurements.sleeve)
        const sleeveScore = Math.max(0, 100 - (sleeveDiff * 10))
        totalScore += sleeveScore // 1x weight for sleeve
        factorCount += 1
      }
      
      // Usual size bonus (strong anchor)
      if (userMeasurements.usualSize === dimension.size) {
        totalScore += 30 // Significant bonus for usual size
        factorCount += 0.5
      }
      
      return {
        size: dimension.size,
        score: factorCount > 0 ? totalScore / factorCount : 0,
        dimension
      }
    })
    
    // Sort by score and get the best recommendation
    sizeScores.sort((a, b) => b.score - a.score)
    
    // Apply final adjustments based on fit preference and usual size relationship
    let bestSize = sizeScores[0].size
    
    if (userMeasurements.usualSize && productSizes.includes(userMeasurements.usualSize)) {
      const usualIndex = productSizes.indexOf(userMeasurements.usualSize)
      const recommendedIndex = productSizes.indexOf(bestSize)
      
      // If the algorithm suggests a very different size from usual, be more conservative
      if (Math.abs(usualIndex - recommendedIndex) >= 2) {
        // Moderate the recommendation towards usual size
        if (recommendedIndex > usualIndex) {
          bestSize = productSizes[Math.min(usualIndex + 1, productSizes.length - 1)]
        } else {
          bestSize = productSizes[Math.max(usualIndex - 1, 0)]
        }
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
        return (
          <div className="space-y-6">
            <h2 className="text-lg font-medium text-center">How would you describe your chest?</h2>
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

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-lg font-medium text-center">How would you describe your stomach/waist area?</h2>
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

      case 4:
        if (isUpperBodyProduct) {
          return (
            <div className="space-y-6">
              <h2 className="text-lg font-medium text-center">How would you describe your shoulders?</h2>
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
          return (
            <div className="space-y-6">
              <h2 className="text-lg font-medium text-center">How would you describe your seat/hips?</h2>
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
        }
        break

      case 5:
        if (isLowerBodyProduct) {
          return (
            <div className="space-y-6">
              <h2 className="text-lg font-medium text-center">How would you describe your leg length?</h2>
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
          // Final recommendation step for upper body
          const recommendedSize = calculateRecommendation()
          const alternativeSize = userMeasurements.fitPreference === "Relaxed Fit" ? 
            (productSizes.indexOf(recommendedSize) > 0 ? productSizes[productSizes.indexOf(recommendedSize) - 1] : null) :
            (productSizes.indexOf(recommendedSize) < productSizes.length - 1 ? productSizes[productSizes.indexOf(recommendedSize) + 1] : null)

          return (
            <div className="space-y-6 text-center">
              <div>
                <h2 className="text-lg font-medium mb-4">Perfect! We found your size.</h2>
                <div className="bg-gray-50 p-6 rounded size-recommendation">
                  <p className="text-xs mb-2">Based on your preferences for a {userMeasurements.fitPreference.toLowerCase()} fit and your unique body profile, we recommend:</p>
                  <div className="text-3xl font-bold my-4">{recommendedSize}</div>
                  <p className="text-xs">for your {productName}</p>
                </div>
              </div>
              
              {alternativeSize && (
                <div className="text-xs">
                  <p>If you prefer a {userMeasurements.fitPreference === "Relaxed Fit" ? "more fitted" : "more relaxed"} fit, consider trying a <strong>{alternativeSize}</strong>.</p>
                </div>
              )}
            </div>
          )
        }
        break
        
      default:
        // Final recommendation step for lower body
        const recommendedSize = calculateRecommendation()
        const alternativeSize = userMeasurements.fitPreference === "Relaxed Fit" ? 
          (productSizes.indexOf(recommendedSize) > 0 ? productSizes[productSizes.indexOf(recommendedSize) - 1] : null) :
          (productSizes.indexOf(recommendedSize) < productSizes.length - 1 ? productSizes[productSizes.indexOf(recommendedSize) + 1] : null)

        return (
          <div className="space-y-6 text-center">
            <div>
              <h2 className="text-lg font-medium mb-4">Perfect! We found your size.</h2>
              <div className="bg-gray-50 p-6 rounded">
                <p className="text-xs mb-2">Based on your preferences for a {userMeasurements.fitPreference.toLowerCase()} fit and your unique body profile, we recommend:</p>
                <div className="text-3xl font-bold my-4">{recommendedSize}</div>
                <p className="text-xs">for your {productName}</p>
              </div>
            </div>
            
            {alternativeSize && (
              <div className="text-xs">
                <p>If you prefer a {userMeasurements.fitPreference === "Relaxed Fit" ? "more fitted" : "more relaxed"} fit, consider trying a <strong>{alternativeSize}</strong>.</p>
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
      case 2: return userMeasurements.chest
      case 3: return userMeasurements.stomach
      case 4: 
        if (isUpperBodyProduct) return userMeasurements.shoulders
        if (isLowerBodyProduct) return userMeasurements.seat
        return true
      case 5: 
        if (isLowerBodyProduct) return userMeasurements.legLength
        return true
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