"use client"

import { useState, useEffect } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface ProductDimensions {
  size: string
  chest?: number
  length: number
  sleeve?: number
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
    
    // Check if this is a lower body product (has waist measurements)
    const isLowerBodyProduct = productDimensions.some(dim => dim.waist)
    
    if (isLowerBodyProduct) {
      // Calculate target waist measurement for lower body products
      let targetWaist = 32
      if (userMeasurements.gender === "Male") {
        targetWaist = 28 + (heightInInches - 60) * 0.3 + (weight - 140) * 0.08
      } else if (userMeasurements.gender === "Female") {
        targetWaist = 26 + (heightInInches - 60) * 0.25 + (weight - 120) * 0.06
      } else {
        targetWaist = 27 + (heightInInches - 60) * 0.275 + (weight - 130) * 0.07
      }

      // Adjust based on body attributes
      if (userMeasurements.stomach === "Broad/Large") targetWaist += 2
      if (userMeasurements.stomach === "Narrow/Small") targetWaist -= 1
      if (userMeasurements.seat === "Broad/Large") targetWaist += 1.5

      // Adjust based on fit preference
      const fitAdjustment = {
        "Very Fitted": -2,
        "Regular Fit": 0,
        "Relaxed Fit": 3
      }[userMeasurements.fitPreference] || 0
      
      targetWaist += fitAdjustment

      // Find best matching size from product dimensions
      let bestSize = productSizes[Math.floor(productSizes.length / 2)]
      let bestDifference = Infinity

      productDimensions.forEach(dimension => {
        if (dimension.waist) {
          const difference = Math.abs(dimension.waist - targetWaist)
          if (difference < bestDifference) {
            bestDifference = difference
            bestSize = dimension.size
          }
        }
      })

      return bestSize
    } else {
      // Calculate target chest measurement for upper body products
      let targetChest = 34
      if (userMeasurements.gender === "Male") {
        targetChest = 28 + (heightInInches - 60) * 0.5 + (weight - 140) * 0.05
      } else if (userMeasurements.gender === "Female") {
        targetChest = 26 + (heightInInches - 60) * 0.4 + (weight - 120) * 0.04
      } else {
        targetChest = 27 + (heightInInches - 60) * 0.45 + (weight - 130) * 0.045
      }

      // Adjust based on body attributes
      if (userMeasurements.chest === "Broad/Large") targetChest += 2
      if (userMeasurements.chest === "Narrow/Small") targetChest -= 1
      if (userMeasurements.stomach === "Broad/Large") targetChest += 1
      if (userMeasurements.shoulders === "Broad/Large") targetChest += 1.5

      // Adjust based on fit preference
      const fitAdjustment = {
        "Very Fitted": -2,
        "Regular Fit": 0,
        "Relaxed Fit": 3
      }[userMeasurements.fitPreference] || 0
      
      targetChest += fitAdjustment

      // Find best matching size from product dimensions
      let bestSize = productSizes[Math.floor(productSizes.length / 2)]
      let bestDifference = Infinity

      productDimensions.forEach(dimension => {
        if (dimension.chest) {
          const difference = Math.abs(dimension.chest - targetChest)
          if (difference < bestDifference) {
            bestDifference = difference
            bestSize = dimension.size
          }
        }
      })

      // Use usual size as a strong anchor and adjust if needed
      if (userMeasurements.usualSize && productSizes.includes(userMeasurements.usualSize)) {
        const usualIndex = productSizes.indexOf(userMeasurements.usualSize)
        const recommendedIndex = productSizes.indexOf(bestSize)
        
        // If the difference is only 1 size, lean towards usual size
        if (Math.abs(usualIndex - recommendedIndex) <= 1) {
          if (userMeasurements.fitPreference === "Relaxed Fit" && usualIndex < productSizes.length - 1) {
            bestSize = productSizes[usualIndex + 1]
          } else if (userMeasurements.fitPreference === "Very Fitted" && usualIndex > 0) {
            bestSize = productSizes[usualIndex - 1]
          } else {
            bestSize = userMeasurements.usualSize
          }
        }
      }

      return bestSize
    }
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