import { MainLayout } from "@/components/layout/MainLayout";
import { 
  DefaultCardExample, 
  DotsCardExample, 
  GradientCardExample, 
  PlusCardExample,
  NeubrutalismCardExample,
  InnerCardExample,
  LiftedCardExample,
  CornersCardExample,
  GridCardExample
} from "@/components/examples/enhanced-card-example";

export default function CardShowcasePage() {
  return (
    <MainLayout>
      <div className="container mx-auto py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Enhanced Card Components</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Showcasing various card designs that can be used throughout the investor-focused website.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white">Default Card</h2>
              <p className="text-white/70 text-sm mb-4">Standard card with clean borders and minimal styling.</p>
              <DefaultCardExample />
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white">Grid Card</h2>
              <p className="text-white/70 text-sm mb-4">Card with a subtle grid pattern background for technical content.</p>
              <GridCardExample />
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white">Dots Card</h2>
              <p className="text-white/70 text-sm mb-4">Card with dotted border and decorative dots at the corners.</p>
              <DotsCardExample />
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white">Gradient Card</h2>
              <p className="text-white/70 text-sm mb-4">Card with subtle gradient borders for added visual interest.</p>
              <GradientCardExample />
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white">Plus Card</h2>
              <p className="text-white/70 text-sm mb-4">Card with plus icons at the corners for a technical feel.</p>
              <PlusCardExample />
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white">Neubrutalism Card</h2>
              <p className="text-white/70 text-sm mb-4">Card with offset shadow for a bold, brutalist design.</p>
              <NeubrutalismCardExample />
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white">Inner Card</h2>
              <p className="text-white/70 text-sm mb-4">Card with inner shadow and subtle gradient background.</p>
              <InnerCardExample />
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white">Lifted Card</h2>
              <p className="text-white/70 text-sm mb-4">Card with bottom shadow creating a lifted appearance.</p>
              <LiftedCardExample />
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white">Corners Card</h2>
              <p className="text-white/70 text-sm mb-4">Card with decorative corner elements for a framed look.</p>
              <CornersCardExample />
            </div>
          </div>

          <div className="bg-black/50 border border-white/10 p-8 rounded">
            <h2 className="text-2xl font-bold text-white mb-4">Implementation Notes</h2>
            <div className="space-y-4 text-white/80">
              <p>
                These enhanced card components are designed to align with the investor-focused design system, 
                featuring sharp corners and the black/white/green color scheme.
              </p>
              <p>
                Each card variant can be customized with different content, sizes, and colors to fit various 
                sections of the website while maintaining design consistency.
              </p>
              <p className="text-sm bg-black/30 p-4 border border-white/10 font-mono">
                {`import { Card } from "@/components/ui/enhanced-card"`}<br/>
                <br/>
                {`<Card`}<br/>
                {`  variant="grid" // Choose from: default, grid, dots, gradient, plus, neubrutalism, inner, lifted, corners`}<br/>
                {`  title="Investment Opportunity"`}<br/>
                {`  description="High ROI sustainable AI infrastructure investment"`}<br/>
                {`  className="max-w-[400px]"`}<br/>
                {`/>`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
