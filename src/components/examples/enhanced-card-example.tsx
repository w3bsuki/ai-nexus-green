import { Card } from "@/components/ui/enhanced-card"

const cardContent = {
  title: "Sustainable AI Infrastructure",
  description: "Our data center leverages natural lake cooling, solar power, and innovative energy-efficient technologies to reduce carbon footprint while providing world-class performance for AI workloads."
}

export function DefaultCardExample() {
  return (
    <Card {...cardContent} className="max-w-[400px] bg-background" />
  )
}

export function DotsCardExample() {
  return (
    <Card variant="dots" {...cardContent} className="max-w-[400px] bg-background" />
  )
}

export function GradientCardExample() {
  return (
    <Card variant="gradient" {...cardContent} className="max-w-[400px] bg-background" />
  )
}

export function PlusCardExample() {
  return (
    <Card variant="plus" {...cardContent} className="max-w-[400px] bg-background" />
  )
}

export function NeubrutalismCardExample() {
  return (
    <Card variant="neubrutalism" {...cardContent} className="max-w-[400px] bg-background" />
  )
}

export function InnerCardExample() {
  return (
    <Card variant="inner" {...cardContent} className="max-w-[400px] bg-background" />
  )
}

export function LiftedCardExample() {
  return (
    <Card variant="lifted" {...cardContent} className="max-w-[400px] bg-background" />
  )
}

export function CornersCardExample() {
  return (
    <Card variant="corners" {...cardContent} className="max-w-[400px] bg-background" />
  )
}

export function GridCardExample() {
  return (
    <Card
      variant="grid"
      title="Grid Pattern Card"
      description="This card features a subtle grid pattern background, perfect for technical or data-focused content."
      className="max-w-[400px] border-white/10"
    >
      <div className="mt-4 space-y-4">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-500"></div>
          <span className="text-white/80">Structured layout</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-500"></div>
          <span className="text-white/80">Technical aesthetic</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-500"></div>
          <span className="text-white/80">Data visualization friendly</span>
        </div>
        <button className="px-4 py-2 mt-4 bg-green-500 text-black hover:bg-white hover:text-green-500 transition-colors">
          Explore Grid
        </button>
      </div>
    </Card>
  );
}
