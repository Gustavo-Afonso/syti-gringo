"use client"
import WhyChooseUs from "@/components/WhyChooseUs";
import { BoxReveal } from "@/components/magicui/box-reveal";
import TypingAnimation from '../components/TypingEffect';
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Check, ChevronRight, DollarSign, Globe, Mail, MessageSquare, Phone, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import HeroSection from '@/components/hero';
import Logo from '@/components/foto';
import FadeInWhenVisible from "@/components/FadeInWhenVisible"

export default function Home() {
  const [activeTab, setActiveTab] = useState("websites")

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky pl-5 pr-5 top-0 z-50 w-full border-b bg-background/50   backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16  items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl px-4">
            <Logo/>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#services"className="text-sm font-bold tracking-wide hover:text-white relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full">
              SERVICES
            </Link>
            <Link href="#portfolio" className="text-sm font-bold tracking-wide hover:text-white relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full">
              PORTFOLIO
            </Link>
            <Link href="#pricing" className="text-sm font-bold tracking-wide hover:text-white relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full">
              PRICING
            </Link>
            <Link href="#testimonials" className="text-sm font-bold tracking-wide hover:text-white relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full">
              TESTIMONIALS
            </Link>
          </nav>
          <Button className= " px-4 py-5 text-lg font-medium text-white bg-gradient-to-r from-red-500 to-red-900 rounded-xl hover:bg-primary/80 transition-all duration-300 transform hover:scale-105 hover:shadow-lg relative overflow-hidden">Contact Us</Button>
        </div>
      </header>

      <main className="flex-1">
       {/* Hero Section */}
<HeroSection/>
<FadeInWhenVisible>
<div className="flex flex-col justify-center items-cente mx-auto max-w-4xl w-full  p-3 sm:p-4 md:p-6 border border-primary rounded-lg shadow-2xl text-white ">
  <div className="flex justify-center items-cente">
   <BoxReveal duration={2}><Logo /></BoxReveal> 
  </div>
  <div className="w-full max-w-xl mx-auto py-5 sm:py-8 md:py-10 px-4 sm:px-4 justify-center items-center">
    <BoxReveal duration={1.5}>
      <h1 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3 justify-center items-center "> 
      Why are our prices so low<span className="text-red-400">?</span>
      </h1>
    </BoxReveal>
  <BoxReveal duration={1}>
    <p className="sm:text-lg md:text-xl mb-4 sm:mb-5">
      We are a Brazilian company and understand the needs of the local market. This allows us to offer high-quality services at a more affordable price, without extra adaptation costs for other countries<span className="text-lg text-red-400">!</span>
    </p>
  </BoxReveal>
</div>

</div>
</FadeInWhenVisible>
        {/* Why Choose Us */}
        <WhyChooseUs />

    <section id="services" className="w-full py-12 md:py-24 lg:py-32  dark:from-gray-900 dark:to-gray-800">
      <div className="container px-4 md:px-6">
        {/* Título e Descrição com Efeito de Surgimento */}
        <FadeInWhenVisible>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gradient-to-r from-red-500 to-red-950 px-3 py-1 text-sm text-white">
                Our Services
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-white">
                Comprehensive Digital Solutions
              </h2>
            </div>
          </div>
        </FadeInWhenVisible>

        <div className="mx-auto mt-12 max-w-3xl">
          <Tabs defaultValue="websites" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3 bg-gray-200 dark:bg-gray-800 p-1 rounded-lg">
              <TabsTrigger
                value="websites"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-600 data-[state=active]:to-red-950 data-[state=active]:text-white rounded-lg transition-all"
              >
                Websites
              </TabsTrigger>
              <TabsTrigger
                value="ecommerce"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-600 data-[state=active]:to-red-950 data-[state=active]:text-white rounded-lg transition-all"
              >
                E-Commerce
              </TabsTrigger>
              <TabsTrigger
                value="apps"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-600 data-[state=active]:to-red-950 data-[state=active]:text-white rounded-lg transition-all"
              >
                Web Apps
              </TabsTrigger>
            </TabsList>

            {/* Conteúdo das Abas com Efeito de Surgimento */}
            <FadeInWhenVisible>
              <TabsContent value="websites" className="mt-6">
                <Card className="border-white shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="grid gap-4 md:grid-cols-2 items-center">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Custom Websites</h3>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">
                          Beautiful, responsive websites tailored to your brand and business goals. Our websites are optimized
                          for performance, SEO, and conversion.
                        </p>
                        <ul className="mt-4 grid gap-2">
                          <li className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-blue-600" />
                            <span className="text-gray-700 dark:text-gray-200">Responsive design for all devices</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-blue-600" />
                            <span className="text-gray-700 dark:text-gray-200">SEO optimization</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-blue-600" />
                            <span className="text-gray-700 dark:text-gray-200">Content management system</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-blue-600" />
                            <span className="text-gray-700 dark:text-gray-200">Analytics integration</span>
                          </li>
                        </ul>
                      </div>
                      <div className="relative h-[200px] md:h-[300px]">
                        <Image
                          src="/placeholder.svg?height=300&width=400"
                          fill
                          alt="Website example"
                          className="rounded-lg object-cover"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </FadeInWhenVisible>

            <FadeInWhenVisible>
              <TabsContent value="ecommerce" className="mt-6">
                <Card className="border-white shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="grid gap-4 md:grid-cols-2 items-center">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">E-Commerce Solutions</h3>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">
                          Powerful online stores that drive sales and provide a seamless shopping experience for your customers.
                        </p>
                        <ul className="mt-4 grid gap-2">
                          <li className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-blue-600" />
                            <span className="text-gray-700 dark:text-gray-200">Secure payment processing</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-blue-600" />
                            <span className="text-gray-700 dark:text-gray-200">Inventory management</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-blue-600" />
                            <span className="text-gray-700 dark:text-gray-200">Customer accounts</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-blue-600" />
                            <span className="text-gray-700 dark:text-gray-200">Marketing tools integration</span>
                          </li>
                        </ul>
                      </div>
                      <div className="relative h-[200px] md:h-[300px]">
                        <Image
                          src="/placeholder.svg?height=300&width=400"
                          fill
                          alt="E-commerce example"
                          className="rounded-lg object-cover"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </FadeInWhenVisible>

            <FadeInWhenVisible>
              <TabsContent value="apps" className="mt-6">
                <Card className="border-white shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="grid gap-4 md:grid-cols-2 items-center">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Custom Web Applications</h3>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">
                          Tailored web applications that streamline your business processes and enhance user experience.
                        </p>
                        <ul className="mt-4 grid gap-2">
                          <li className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-blue-600" />
                            <span className="text-gray-700 dark:text-gray-200">User authentication</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-blue-600" />
                            <span className="text-gray-700 dark:text-gray-200">Database integration</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-blue-600" />
                            <span className="text-gray-700 dark:text-gray-200">API development</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-blue-600" />
                            <span className="text-gray-700 dark:text-gray-200">Third-party integrations</span>
                          </li>
                        </ul>
                      </div>
                      <div className="relative h-[200px] md:h-[300px]">
                        <Image
                          src="/placeholder.svg?height=300&width=400"
                          fill
                          alt="Web app example"
                          className="rounded-lg object-cover"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </FadeInWhenVisible>
          </Tabs>
        </div>
      </div>
    </section>

    <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <FadeInWhenVisible>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gradient-to-r from-red-600 to-red-950 px-3 py-1 text-sm text-white">
                Our Portfolio
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Recent Projects</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Take a look at some of our recent work for US clients.
              </p>
            </div>
          </div>
        </FadeInWhenVisible>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <FadeInWhenVisible key={item}>
              <div className="group relative overflow-hidden rounded-lg">
                <Image
                  src={`/placeholder.svg?height=400&width=600&text=Project ${item}`}
                  width={600}
                  height={400}
                  alt={`Portfolio item ${item}`}
                  className="aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-xl font-bold text-white">Project {item}</h3>
                    <p className="text-white/80">Website Design & Development</p>
                  </div>
                </div>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32  dark:from-gray-900 dark:to-gray-800">
      <div className="container px-4 md:px-6">
        <FadeInWhenVisible>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gradient-to-r from-red-600 to-red-950 px-3 py-1 text-sm text-white hover:scale-105 transition-transform">
                Pricing
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-white">
                Transparent & Affordable Pricing
              </h2>
              <p className="max-w-[900px] text-gray-600 dark:text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Compare our prices with US agencies and see the difference.
              </p>
            </div>
          </div>
        </FadeInWhenVisible>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 mt-12">
          {/* US Agency Pricing Card */}
          <FadeInWhenVisible>
            <Card className="relative overflow-hidden border-2 border-gray-200 dark:border-gray-700 hover:border-primary hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">US Agency Pricing</h3>
                  <div className="text-4xl font-bold text-gray-900 dark:text-white">$10,000+</div>
                  <p className="text-gray-600 dark:text-gray-300">For a standard business website</p>
                  <ul className="mt-4 grid gap-2 text-left">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-blue-600" />
                      <span className="text-gray-700 dark:text-gray-200">Custom design</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-blue-600" />
                      <span className="text-gray-700 dark:text-gray-200">Responsive development</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-blue-600" />
                      <span className="text-gray-700 dark:text-gray-200">Content management system</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-blue-600" />
                      <span className="text-gray-700 dark:text-gray-200">SEO optimization</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </FadeInWhenVisible>

          {/* Pricing Card */}
          <FadeInWhenVisible>
            <Card className="relative overflow-hidden border-2 border-primary hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute -right-12 top-7 rotate-45 bg-gradient-to-r from-red-600 to-red-950 px-12 py-1 text-sm font-medium text-white hover:rotate-0 transition-transform duration-300">
                Save 50%
              </div>
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                <BoxReveal duration={2}>
  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
    <Logo/>
  </h1>
</BoxReveal>
                  <div className="text-4xl font-bold text-gray-900 dark:text-white">$5,000+</div>
                  <p className="text-gray-600 dark:text-gray-300">For the same quality website</p>
                  <ul className="mt-4 grid gap-2 text-left">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-red-600" />
                      <span className="text-gray-700 dark:text-gray-200">Custom design</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-red-600" />
                      <span className="text-gray-700 dark:text-gray-200">Responsive development</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-red-600" />
                      <span className="text-gray-700 dark:text-gray-200">Content management system</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-red-600" />
                      <span className="text-gray-700 dark:text-gray-200">SEO optimization</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-red-600" />
                      <span className="text-gray-700 dark:text-gray-200">Faster delivery time</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-red-600" />
                      <span className="text-gray-700 dark:text-gray-200">Dedicated project manager</span>
                    </li>
                  </ul>
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-red-600 to-red-950 hover:from-red-900 hover:to-red-950 text-white hover:scale-105 transition-transform"
                  >
                    Get Started
                  </Button>
                </div>
              </CardContent>
            </Card>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>

        {/* Testimonials */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
  <div className="container px-4 md:px-6">
    <FadeInWhenVisible>
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-gradient-to-r from-red-600 to-red-950 px-3 py-1 text-sm text-white">
            Testimonials
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our US Clients Say</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Don't just take our word for it. Hear from our satisfied clients across the United States.
          </p>
        </div>
      </div>
    </FadeInWhenVisible>
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
      {[
        {
          name: "John Smith",
          role: "CEO, TechStart Inc.",
          location: "San Francisco, CA",
          quote:
            "Working with Bia and her team was a game-changer for our business. We got a premium website at half the cost of local agencies, with no compromise on quality.",
        },
        {
          name: "Sarah Johnson",
          role: "Marketing Director, Retail Plus",
          location: "New York, NY",
          quote:
            "I was skeptical at first about working with an overseas team, but Bia's communication was flawless. The website they delivered exceeded our expectations.",
        },
        {
          name: "Michael Brown",
          role: "Founder, GrowFast",
          location: "Austin, TX",
          quote:
            "The ROI on our website has been incredible. We saved thousands of dollars and got a website that converts better than our previous one built by a local agency.",
        },
      ].map((testimonial, index) => (
        <FadeInWhenVisible key={index}>
          <Card className="relative overflow-hidden">
            <CardContent className="p-6">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center gap-2">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill text-primary" />
                    ))}
                </div>
                <p className="text-muted-foreground">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4 pt-4">
                  <div className="rounded-full bg-muted p-1">
                    <div className="h-10 w-10 rounded-full bg-muted-foreground/20"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </FadeInWhenVisible>
      ))}
    </div>
  </div>
</section>

        {/* CTA */}
        <FadeInWhenVisible>
  <div className="flex flex-col mx-auto max-w-4xl w-full p-3 sm:p-4 md:p-6 border border-primary rounded-lg shadow-2xl text-white justify-center">
    <div className="flex justify-center">
      <BoxReveal duration={2}><Logo /></BoxReveal>
    </div>
    <div className="w-full max-w-xl mx-auto py-5 sm:py-8 md:py-10 px-4 sm:px-4">
      <BoxReveal duration={1.5}>
        <h1 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3 text-center">
          We create complete digital projects: websites and online services<span className="text-red-400">!</span>
        </h1>
      </BoxReveal>
      <BoxReveal duration={1}>
        <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-5 text-center">
          In addition to developing modern and customized websites, we also offer complete digital solutions to optimize your processes and boost your online presence. Whether it's creating an e-commerce site, a custom system, or an online platform, we are ready to turn your idea into reality<span className="text-lg text-red-400">.</span>
        </p>
      </BoxReveal>
      <div className="flex flex-col justify-center gap-2 min-[400px]:flex-row">
        <FadeInWhenVisible>
          <Button 
            size="lg" 
            variant="secondary" 
            className="w-full sm:w-auto px-3 py-3 sm:px-4 sm:py-5 text-sm sm:text-lg text-center font-medium text-white bg-gradient-to-r from-red-500 to-red-900 rounded-xl hover:bg-primary/80 transition-all duration-300 transform hover:scale-105 hover:shadow-lg relative overflow-hidden"
          >
            Get in touch with no obligation! <Phone className="h-4 w-4 ml-2" />
          </Button>
        </FadeInWhenVisible>
      </div>
    </div>
  </div>
</FadeInWhenVisible>
      </main>

      {/* Footer */}
      <FadeInWhenVisible>
<footer className="w-full border-white bg-black py-8">
  <div className="container mx-auto px-4">
    <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
      <div className="flex flex-col items-center md:items-start">
        <div className="mb-2">
          <span className="text-xl font-bold text-primary"><BoxReveal duration={1}><Logo /></BoxReveal></span>
        </div>
        <p className="text-center text-sm text-muted-foreground md:text-left">
          © 2025 SyTi. All rights reserved.
        </p>
      </div>
      
      <div className="flex flex-col items-center gap-4 md:flex-row">
        <div className="flex space-x-6">
          <Link href="#" className="text-sm font-medium text-gray-600 transition-colors hover:text-primary">
            Privacy Policy
          </Link>
          <Link href="#" className="text-sm font-medium text-gray-600 transition-colors hover:text-primary">
            Terms of Service
          </Link>
          <Link href="#" className="text-sm font-medium text-gray-600 transition-colors hover:text-primary">
            Contact Us
          </Link>
        </div>
        
        <div className="mt-4 flex space-x-4 md:mt-0">
          <Link href="#" className="rounded-full bg-gradient-to-r from-red-500 to-red-950 p-2 text-white transition-colors hover:bg-red-500 hover:text-black">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </Link>
          <Link href="#" className="rounded-full bg-gradient-to-r from-red-500 to-red-950 p-2 text-white transition-colors hover:bg-red-500 hover:text-black">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </Link>
          <Link href="#" className="rounded-full bg-gradient-to-r from-red-500 to-red-950 p-2 text-white transition-colors hover:bg-red-500 hover:text-black">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  </div>
</footer>
</FadeInWhenVisible>
</div>
  )
}

