import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Zap, Circle, Gauge, Users, Activity } from "lucide-react";

const BLOG_POSTS = [
  {
    id: 1,
    title: "Best practices for showcasing features",
    date: "Oct 13, 2025",
    gradient: "from-[#D3E4FD] to-[#FFD1D1]", // Blue to Pinkish
    icon: <Star className="w-8 h-8 text-gray-700" />,
    element: (
      <div className="relative w-32 h-24 bg-white rounded-lg shadow-lg flex items-center justify-center">
         <div className="w-8 h-8 rounded-full bg-blue-500/20 mr-2"></div>
         <div className="space-y-2">
            <div className="w-16 h-2 bg-gray-100 rounded"></div>
            <div className="w-12 h-2 bg-gray-100 rounded"></div>
         </div>
         <div className="absolute -top-2 -right-2 bg-white p-1 rounded-full shadow-sm">
             <Star className="w-3 h-3 text-black fill-black" />
         </div>
      </div>
    )
  },
  {
    id: 2,
    title: "Visual storytelling for complex products",
    date: "Oct 13, 2025",
    gradient: "from-[#FDE6BA] to-[#FFE8E8]", // Yellow to light
    icon: <Zap className="w-8 h-8 text-yellow-600" />,
    element: (
        <div className="relative w-20 h-20">
             <div className="absolute inset-0 bg-gradient-to-tr from-purple-400 to-yellow-300 rounded-full blur-[1px] transform rotate-12 shadow-inner"></div>
             {/* Simple torus approximation */}
             <div className="absolute inset-4 bg-[#FDEDBA] rounded-full blur-[2px]"></div>
        </div>
    )
  },
  {
    id: 3,
    title: "How microinteractions boost user experience",
    date: "Oct 13, 2025",
    gradient: "from-[#E0D9FF] to-[#F0F0FF]", // Purple
    icon: <Circle className="w-8 h-8 text-purple-600" />,
    element: (
        <div className="relative flex items-center justify-center">
            <div className="absolute w-24 h-24 border border-purple-300/50 rounded-full"></div>
            <div className="absolute w-16 h-16 border border-purple-400/50 rounded-full"></div>
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-200">
                <span className="text-white text-xs">⚡</span>
            </div>
        </div>
    )
  },
  {
    id: 4,
    title: "Optimizing dashboard performance metrics",
    date: "Oct 13, 2025",
    gradient: "from-[#FFF4D9] to-[#FFD6D6]", // Orange/Warm
    icon: <Gauge className="w-8 h-8 text-orange-600" />,
    element: (
        <div className="relative w-24 h-16 bg-white/50 rounded-t-full border-t-4 border-orange-400 flex items-end justify-center overflow-hidden">
             <div className="w-1 h-8 bg-black origin-bottom transform -rotate-45 mb-0"></div>
             <div className="absolute bottom-0 w-2 h-2 bg-black rounded-full"></div>
        </div>
    )
  },
  {
    id: 5,
    title: "Collaborative tools for remote teams",
    date: "Oct 13, 2025",
    gradient: "from-[#FAD0C4] to-[#FFD1FF]", // Pinkish
    icon: <Users className="w-8 h-8 text-pink-600" />,
    element: (
        <div className="bg-white/60 p-3 rounded-xl shadow-sm flex gap-2 items-center">
             <div className="w-6 h-6 rounded-full bg-blue-400"></div>
             <div className="w-6 h-6 rounded-full bg-purple-400 -ml-2 border-2 border-white"></div>
             <div className="w-6 h-6 rounded-full bg-pink-400 -ml-2 border-2 border-white"></div>
             <div className="w-8 h-1 bg-gray-300 rounded-full ml-1"></div>
        </div>
    )
  },
  {
    id: 6,
    title: "The future of AI in user interfaces",
    date: "Oct 13, 2025",
    gradient: "from-[#D4FC79] to-[#96E6A1]", // Greenish/Blueish
    icon: <Activity className="w-8 h-8 text-green-600" />,
    element: (
         <div className="relative">
             <div className="flex gap-2">
                 <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
                 <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse delay-75"></div>
                 <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse delay-150"></div>
             </div>
             <svg className="w-24 h-12 absolute top-4 left-0 text-blue-500/50" viewBox="0 0 100 50">
                 <path d="M0 25 Q 25 0 50 25 T 100 25" fill="none" stroke="currentColor" strokeWidth="2" />
             </svg>
         </div>
    )
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans selection:bg-purple-100">
      <Navbar />
      <main className="flex-grow pt-32 pb-24">
        {/* Header Section */}
        <div className="container mx-auto px-6 text-center mb-16 relative">
          {/* Background decoration */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-gradient-to-b from-purple-100/50 to-transparent -z-10 blur-3xl pointer-events-none" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 text-foreground">
              SaaS insights & tips
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
              Practical ideas and trends to help your software brand grow and stand out.
            </p>
          </motion.div>
        </div>

        {/* Blog Grid */}
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group h-full border-none shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out bg-transparent overflow-hidden rounded-3xl cursor-pointer">
                   
                   {/* Card Image Area */}
                   <div className={`h-64 w-full bg-gradient-to-br ${post.gradient} relative flex items-center justify-center p-6 overflow-hidden`}>
                        {/* Hover Zoom Effect Container */}
                        <div className="transition-transform duration-500 group-hover:scale-110 flex items-center justify-center w-full h-full">
                            {post.element}
                        </div>
                   </div>

                   {/* Card Content */}
                   <CardContent className="p-6 bg-white dark:bg-card">
                        <div className="text-sm font-medium text-muted-foreground mb-3">
                            {post.date}
                        </div>
                        <h3 className="text-xl font-bold leading-tight text-foreground group-hover:text-purple-600 transition-colors">
                            {post.title}
                        </h3>
                   </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="mt-16 text-center">
            <Button 
                size="lg" 
                className="rounded-full px-8 py-6 text-lg bg-[#6366F1] hover:bg-[#5558E6] text-white shadow-lg shadow-indigo-200 dark:shadow-none transition-transform hover:scale-105"
            >
                Load More
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
