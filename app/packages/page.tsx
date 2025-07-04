import { Tv, Fan, Lightbulb, Smartphone, Refrigerator, Wind } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">W</span>
                </div>
                <span className="text-xl font-semibold text-gray-900">Wiibi Energy</span>
              </div>
            </div>

            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-600 hover:text-gray-900">
                Home
              </a>
              <a href="/packages" className="text-orange-500 font-medium border-b-2 border-orange-500 pb-1">
                Packages
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Projects
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Services
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                About Us
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Contact Us
              </a>
            </nav>

            <Button className="bg-orange-500 hover:bg-orange-600 text-white">Get a Quote</Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Packages and Pricing</h1>
            <p className="text-gray-600 text-lg">We have packages designed for efficiency and saving money</p>
          </div>

          {/* Package Categories */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-md px-6">Wiibi Home</Button>
              <Button variant="ghost" className="text-gray-600 hover:text-gray-900 px-6">
                Wiibi Business
              </Button>
              <Button variant="ghost" className="text-gray-600 hover:text-gray-900 px-6">
                Wiibi Reserve
              </Button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
            {/* Basic Solar (mini) */}
            <Card className="relative border border-gray-200 rounded-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Basic Solar</h3>
                <span className="text-gray-500">(mini)</span>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span>1 kva Inverter</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span>1 220 wet battery</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span>550w solar Panels</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span>Wiring and Installation</span>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-sm font-medium text-gray-900 mb-3">To Power</p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Tv className="w-4 h-4" />
                      <span>Tv</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Fan className="w-4 h-4" />
                      <span>Fan</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Lightbulb className="w-4 h-4" />
                      <span>Lights</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Smartphone className="w-4 h-4" />
                      <span>Smart Pump</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-600">Free Home Delivery</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-600">1 year warranty</span>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-2xl font-bold text-gray-900">₦ 570,000</span>
                    <span className="text-lg text-gray-400 line-through">₦ 700,000</span>
                    <Badge className="bg-red-100 text-red-600 text-xs">18% off</Badge>
                  </div>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Buy</Button>
                </div>
              </CardContent>
            </Card>

            {/* Standard */}
            <Card className="relative border border-gray-200 rounded-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Standard</h3>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span>2.5 pure sine wave Inverter</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span>2x 220AH wet battery</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span>1650 Half cut solar Panels</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span>MPPT Solar Panel</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span>Wiring and Installation</span>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-sm font-medium text-gray-900 mb-3">To Power</p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Tv className="w-4 h-4" />
                      <span>Tv</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Fan className="w-4 h-4" />
                      <span>Fan</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Lightbulb className="w-4 h-4" />
                      <span>Lights</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Smartphone className="w-4 h-4" />
                      <span>Smart Pump</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Wind className="w-4 h-4" />
                      <span>Air Conditioner</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-600">Free Home Delivery</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-600">1 year warranty</span>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-gray-900">₦ 1,200,000</span>
                  </div>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Buy</Button>
                </div>
              </CardContent>
            </Card>

            {/* Advance */}
            <Card className="relative border border-gray-200 rounded-lg">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-orange-500 text-white px-3 py-1">Popular</Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Advance</h3>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span>3.5 kva Inverter</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span>4x 220 wet battery</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span>3300w half cut solar Panels</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span>Wiring and Installation</span>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-sm font-medium text-gray-900 mb-3">To Power</p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Tv className="w-4 h-4" />
                      <span>Tv</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Fan className="w-4 h-4" />
                      <span>Fan</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Lightbulb className="w-4 h-4" />
                      <span>Lights</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-4 h-4 border border-gray-400 rounded"></div>
                      <span>Gadgets</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Smartphone className="w-4 h-4" />
                      <span>Smart Pump</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Refrigerator className="w-4 h-4" />
                      <span>Fridge</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Wind className="w-4 h-4" />
                      <span>Air Conditioner</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-600">Free Home Delivery</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-600">1 year warranty</span>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-lg text-gray-400 line-through">₦ 1,500,000</span>
                    <Badge className="bg-red-100 text-red-600 text-xs">13% off</Badge>
                  </div>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-gray-900">₦ 1,300,000</span>
                  </div>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Buy Best Value</Button>
                </div>
              </CardContent>
            </Card>

            {/* Class */}
            <Card className="relative border border-gray-200 rounded-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Class</h3>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span>5 kva Inverter</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span>4x 220 wet battery</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span>3300w</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span>MPPT Solar Controller</span>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-sm font-medium text-gray-900 mb-3">To Power</p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Tv className="w-4 h-4" />
                      <span>Tv</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Fan className="w-4 h-4" />
                      <span>Fan</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Lightbulb className="w-4 h-4" />
                      <span>Lights</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-4 h-4 border border-gray-400 rounded"></div>
                      <span>Gadgets</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Smartphone className="w-4 h-4" />
                      <span>Smart Pump</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Refrigerator className="w-4 h-4" />
                      <span>Fridge</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Wind className="w-4 h-4" />
                      <span>Air Conditioner</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-600">Free Home Delivery</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-600">1 year warranty</span>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-gray-900">₦ 2,300,000</span>
                  </div>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Buy</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-gray-400 mb-2">Our motto Empowering tomorrow, today</p>
          </div>

          <div className="flex flex-wrap justify-center items-center space-x-8 text-sm">
            <span className="font-semibold">Wiibi Limited</span>
            <a href="/packages" className="text-gray-400 hover:text-white">
              Packages &Pricing
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Installation and Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              FAQs
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Contact Us
            </a>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Instagram</span>📷
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>💼
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
