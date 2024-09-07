'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CheckIcon } from "lucide-react"
import Link from "next/link"

export default function FareConfirmationDeparture() {
  const fareOptions = [
    {
      name: "Economy Light",
      price: 199,
      features: [
        "1 personal item",
        "No checked baggage",
        "Seat selection on check-in",
        "No changes or cancellations",
      ],
    },
    {
      name: "Economy Light",
      price: 199,
      features: [
        "1 personal item",
        "1 checked bag (up to 50 lbs)",
        "Free seat selection",
        "Free changes",
      ],
    },
    {
      name: "Business",
      price: 199,
      features: [
        "1 personal item",
        "1 carry-on",
        "2 checked bags (up to 70 lbs each)",
        "Priority boarding",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="w-40 h-8 bg-gray-300"></div>
          <div className="space-x-4">
            <Button variant="ghost">LOG IN</Button>
            <Button>SIGN UP</Button>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between mb-8">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mr-2">
              <CheckIcon className="h-5 w-5" />
            </div>
            <span className="font-semibold">CHOOSE DEPARTURE FLIGHT</span>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center mr-2">2</div>
            <span className="text-gray-600">CHOOSE RETURN FLIGHT</span>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center mr-2">3</div>
            <span className="text-gray-600">PAYMENT</span>
          </div>
        </div>
        <h1 className="text-3xl font-bold mb-4">CHOOSE A DEPARTURE FLIGHT FARE</h1>
        <p className="text-xl mb-6">PSP → NYC, 8/16 8:00am - 2:01pm, Nonstop</p>
        <h2 className="text-2xl font-semibold mb-4">Please select a fare option</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {fareOptions.map((option, index) => (
            <Card key={index} className="bg-gray-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">
                  {index === 0 && "$"}
                  {index === 1 && "$$"}
                  {index === 2 && "$$$"} {option.name}
                </h3>
                <RadioGroup defaultValue="option-one">
                  <div className="flex items-center space-x-2 mb-2">
                    <RadioGroupItem value={`option-${index + 1}`} id={`option-${index + 1}`} />
                    <label htmlFor={`option-${index + 1}`}>1 personal item</label>
                  </div>
                </RadioGroup>
                {option.features.slice(1).map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center mb-2">
                    <Checkbox id={`feature-${index}-${featureIndex}`} className="mr-2" />
                    <label htmlFor={`feature-${index}-${featureIndex}`}>{feature}</label>
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Button className="w-full">SELECT FOR ${option.price}</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}