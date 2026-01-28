import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { StickyContactBar } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: 'Emergency Wind Damage Roof Repair in Amarillo | 5 Star',
  description: 'Wind Damage Repair in Amarillo, TX. Free inspections, insurance claim help, fast response. Call 5 Star Roofing for a free quote today!',
};

export default function Page() {
  return (
    <div className="container-custom py-12">      <Breadcrumb items={[
              {
                      "name": "Home",
                      "url": "/"
              },
              {
                      "name": "Wind Damage Roof Repair",
                      "url": "/wind-damage-roof-repair/"
              },
              {
                      "name": "Amarillo",
                      "url": "/wind-damage-roof-repair-in-amarillo/"
              }
      ]} />

      {/* Sticky Contact Bar */}
      <StickyContactBar />


      <h1 className="text-4xl font-bold mb-6">Wind Damage Roof Repair in Amarillo</h1>

      

      
      <div className="content-block">
        <h2 className="content-block-title">Amarillo Wind Damage Specialists</h2>
        <p className="text-lg">
          The Texas Panhandle averages wind speeds of 12-14 mph year-round—higher than 99% of U.S. locations. During severe weather, sustained winds regularly exceed 50-60 mph, with gusts over 80 mph. These high winds cause significant roof damage across Amarillo, from lifted shingles to completely blown-off sections.
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Common Wind Damage Patterns</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="card-body bg-white rounded shadow">
          <h3 className="font-bold mb-3">Shingle Damage</h3>
          <ul className="space-y-2">
            <li>• <strong>Lifted Shingles:</strong> Wind gets under edges, breaking seal strips</li>
            <li>• <strong>Missing Shingles:</strong> Complete shingle blow-off exposing underlayment</li>
            <li>• <strong>Creased Shingles:</strong> Wind pushes shingles up then slaps them back down</li>
            <li>• <strong>Torn Shingles:</strong> Partial shingles ripped away from nail line</li>
          </ul>
        </div>
        <div className="card-body bg-white rounded shadow">
          <h3 className="font-bold mb-3">Structural Wind Damage</h3>
          <ul className="space-y-2">
            <li>• <strong>Ridge Cap Damage:</strong> Wind targets vulnerable roof peaks</li>
            <li>• <strong>Flashing Failure:</strong> Metal flashing pulled away from chimneys/walls</li>
            <li>• <strong>Soffit/Fascia:</strong> High winds rip away roof edge components</li>
            <li>• <strong>Gable End Damage:</strong> Wind pressure on gable ends can lift entire sections</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">How Insurance Handles Wind Damage</h2>
      <p className="mb-4">Wind damage claims differ from <a href="/hail-damage-roof-repair-in-amarillo/" className="text-brand-brown hover:text-brand-gold underline">hail damage</a>. Adjusters look for:</p>
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h3 className="font-bold mb-3">Wind Damage Claim Requirements:</h3>
        <ul className="space-y-2">
          <li><strong>1. Documented Storm Event:</strong> Weather service records showing high winds in your area</li>
          <li><strong>2. Recent Damage:</strong> Evidence damage occurred during specific storm (not gradual wear)</li>
          <li><strong>3. Pattern Recognition:</strong> Damage consistent with wind direction and intensity</li>
          <li><strong>4. Neighboring Damage:</strong> Similar damage on nearby homes supports claim</li>
          <li><strong>5. Proper Installation:</strong> Pre-existing installation defects may not be covered</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Wind-Resistant Roofing Solutions</h2>
      <p className="mb-4">After wind damage repairs, upgrade to wind-resistant systems designed for Texas Panhandle conditions:</p>

      <div className="space-y-6 mb-8">
        <div className="card">
          <div className="card-body">
            <h3 className="font-bold text-lg mb-3">6-Nail Shingle Installation Pattern</h3>
            <p className="mb-3">Standard installation uses 4 nails per shingle. High-wind areas like Amarillo benefit from 6-nail pattern:</p>
            <ul className="space-y-1 text-sm">
              <li>✓ Exceeds building code requirements</li>
              <li>✓ Prevents shingle lifting in 130+ mph winds</li>
              <li>✓ Required by some insurance companies for coverage</li>
              <li>✓ Minimal additional cost ($200-500 on average home)</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h3 className="font-bold text-lg mb-3">SealGuard™ and Enhanced Adhesive Strips</h3>
            <p className="mb-3">Premium shingles feature extra adhesive for superior wind resistance:</p>
            <ul className="space-y-1 text-sm">
              <li>✓ GAF WindProven™ technology (130 mph rating)</li>
              <li>✓ Owens Corning SureNail® strip</li>
              <li>✓ CertainTeed Triple Layer Protection</li>
              <li>✓ Activates in Amarillo sun heat for strong bond</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h3 className="font-bold text-lg mb-3">Standing Seam Metal (Ultimate Wind Protection)</h3>
            <p className="mb-3">Metal roofing with concealed fasteners provides maximum wind resistance:</p>
            <ul className="space-y-1 text-sm">
              <li>✓ Rated for 140+ mph winds</li>
              <li>✓ Interlocking panels can't lift</li>
              <li>✓ No exposed fasteners to fail</li>
              <li>✓ Ideal for Panhandle wind conditions</li>
            </ul>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Prevent Future Wind Damage</h2>
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="feature-box">
          <div className="feature-icon">🔧</div>
          <h3 className="feature-title">Annual Inspections</h3>
          <p className="feature-text">Check seal strips and fasteners before storm season</p>
        </div>
        <div className="feature-box">
          <div className="feature-icon">🌳</div>
          <h3 className="feature-title">Tree Trimming</h3>
          <p className="feature-text">Keep branches 10+ feet from roof surface</p>
        </div>
        <div className="feature-box">
          <div className="feature-icon">🎯</div>
          <h3 className="feature-title">Proper Ventilation</h3>
          <p className="feature-text">Balanced intake/exhaust reduces wind uplift pressure</p>
        </div>
      </div>
    

      <section className="cta-section mt-12">
        <h2 className="cta-title">Need Expert Roofing Service in Amarillo?</h2>
        <p className="cta-text">
          Free inspections, insurance claim assistance, and professional installation. Serving the Texas Panhandle for over 10 years.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="tel:8066226041" className="btn-primary-hero bg-white text-brand-brown hover:bg-gray-100 text-lg">
            📞 Call (806) 622-6041
          </a>
          <a href="/contact/" className="btn-secondary-hero border-2 border-white hover:bg-white hover:text-brand-brown text-lg">
            Request Free Inspection
          </a>
        </div>
      </section>
    </div>
  );
}
