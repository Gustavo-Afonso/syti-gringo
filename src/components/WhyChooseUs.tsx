"use client"
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Star, MessageSquare } from "lucide-react";
import FadeInWhenVisible from "@/components/FadeInWhenVisible"


// Componente principal
export default function WhyChooseUs() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <FadeInWhenVisible>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-white bg-gradient-to-r from-red-600 to-red-900">
                Why Choose Us
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-white">
                We are a company that offers the{" "}
                <p className="text-transparent pb-4 bg-clip-text bg-gradient-to-r from-red-600 to-red-900">
                  best quality at the lowest price.
                </p>
              </h2>
            </div>
          </div>
        </FadeInWhenVisible>
        
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
          <FadeInWhenVisible delay={0.2}>
            <Card className="relative overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                  <div className="rounded-full bg-gradient-to-r from-red-500 to-red-950 p-4">
                    <DollarSign className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold bg-red-500 bg-clip-text text-transparent">
                    Cost Effective
                  </h3>
                  <p className="text-primary-600 font-semibold dark:text-gray-300">
                    Save up to 50% compared to US-based agencies while maintaining the same quality standards.
                  </p>
                </div>
              </CardContent>
            </Card>
          </FadeInWhenVisible>
          
          <FadeInWhenVisible delay={0.4}>
            <Card className="relative overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                  <div className="rounded-full bg-gradient-to-r from-red-500 to-red-950 p-4">
                    <Star className="h-8 w-8 text-whati" />
                  </div>
                  <h3 className="text-xl font-bold bg-red-500 bg-clip-text text-transparent">
                    Premium Quality
                  </h3>
                  <p className="text-primary-600 font-semibold dark:text-gray-300">
                    Our team of expert developers and designers deliver world-class websites that exceed expectations.
                  </p>
                </div>
              </CardContent>
            </Card>
          </FadeInWhenVisible>
          
          <FadeInWhenVisible delay={0.6}>
            <Card className="relative overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                  <div className="rounded-full bg-gradient-to-r from-red-500 to-red-950 p-4">
                    <MessageSquare className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold bg-red-500 bg-clip-text text-transparent">
                    Fluent Communication
                  </h3>
                  <p className="text-p-600 font-semibold dark:text-gray-300">
                    Our team is fluent in English and works during US business hours for seamless collaboration.
                  </p>
                </div>
              </CardContent>
            </Card>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
}

