import { useState } from "react";
import { Calculator, Zap, Car, DollarSign, Fuel } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

const EVCostCalculator = () => {
  const [milesPerDay, setMilesPerDay] = useState(30);
  const [gasPrice, setGasPrice] = useState(3.5);
  const [electricityRate, setElectricityRate] = useState(0.13);
  const [gasMPG, setGasMPG] = useState(25);
  const [evEfficiency, setEvEfficiency] = useState(3.5); // miles per kWh

  const annualMiles = milesPerDay * 365;
  const annualGasCost = (annualMiles / gasMPG) * gasPrice;
  const annualEVCost = (annualMiles / evEfficiency) * electricityRate;
  const annualSavings = annualGasCost - annualEVCost;
  const fiveYearSavings = annualSavings * 5;

  return (
    <div className="bg-card rounded-xl p-6 md:p-8 card-elevated">
      <div className="flex items-center gap-2 mb-2">
        <Calculator className="h-6 w-6 text-primary" />
        <h3 className="text-xl font-heading font-bold text-foreground">EV Cost Savings Calculator</h3>
      </div>
      <p className="text-sm text-muted-foreground mb-6">
        See how much you could save by switching to an electric vehicle. Adjust the sliders below.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Inputs */}
        <div className="space-y-6">
          <div>
            <label className="text-sm font-medium text-foreground flex justify-between mb-2">
              <span className="flex items-center gap-1"><Car className="h-3.5 w-3.5" /> Daily Miles Driven</span>
              <span className="text-primary font-bold">{milesPerDay} mi</span>
            </label>
            <Slider value={[milesPerDay]} onValueChange={(v) => setMilesPerDay(v[0])} min={5} max={150} step={5} />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground flex justify-between mb-2">
              <span className="flex items-center gap-1"><Fuel className="h-3.5 w-3.5" /> Gas Price ($/gal)</span>
              <span className="text-primary font-bold">${gasPrice.toFixed(2)}</span>
            </label>
            <Slider value={[gasPrice * 100]} onValueChange={(v) => setGasPrice(v[0] / 100)} min={200} max={700} step={10} />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground flex justify-between mb-2">
              <span className="flex items-center gap-1"><Zap className="h-3.5 w-3.5" /> Electricity Rate ($/kWh)</span>
              <span className="text-primary font-bold">${electricityRate.toFixed(2)}</span>
            </label>
            <Slider value={[electricityRate * 100]} onValueChange={(v) => setElectricityRate(v[0] / 100)} min={5} max={40} step={1} />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground flex justify-between mb-2">
              <span>Current Gas Car MPG</span>
              <span className="text-primary font-bold">{gasMPG} mpg</span>
            </label>
            <Slider value={[gasMPG]} onValueChange={(v) => setGasMPG(v[0])} min={10} max={50} step={1} />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground flex justify-between mb-2">
              <span>EV Efficiency (mi/kWh)</span>
              <span className="text-primary font-bold">{evEfficiency.toFixed(1)}</span>
            </label>
            <Slider value={[evEfficiency * 10]} onValueChange={(v) => setEvEfficiency(v[0] / 10)} min={20} max={50} step={1} />
          </div>
        </div>

        {/* Results */}
        <div className="space-y-4">
          <div className="bg-secondary rounded-lg p-5">
            <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider">Annual Miles</p>
            <p className="text-2xl font-heading font-bold text-foreground">{annualMiles.toLocaleString()} mi</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-destructive/10 rounded-lg p-4">
              <p className="text-xs text-muted-foreground mb-1"><Fuel className="h-3 w-3 inline mr-1" />Gas Car/Year</p>
              <p className="text-lg font-heading font-bold text-destructive">${annualGasCost.toFixed(0)}</p>
            </div>
            <div className="bg-primary/10 rounded-lg p-4">
              <p className="text-xs text-muted-foreground mb-1"><Zap className="h-3 w-3 inline mr-1" />EV/Year</p>
              <p className="text-lg font-heading font-bold text-primary">${annualEVCost.toFixed(0)}</p>
            </div>
          </div>
          <div className="bg-hero-gradient text-primary-foreground rounded-lg p-5 text-center">
            <p className="text-xs opacity-80 mb-1 uppercase tracking-wider">Annual Savings</p>
            <p className="text-3xl font-heading font-bold">
              <DollarSign className="h-6 w-6 inline" />{annualSavings.toFixed(0)}
            </p>
          </div>
          <div className="bg-card border border-border rounded-lg p-4 text-center">
            <p className="text-xs text-muted-foreground mb-1">5-Year Savings</p>
            <p className="text-xl font-heading font-bold text-primary">${fiveYearSavings.toFixed(0)}</p>
          </div>
          <p className="text-xs text-muted-foreground text-center">
            Ready to go electric? <a href="https://www.usacarvolts.com" className="text-primary hover:underline">USA Car Volts</a> installs EV chargers!
          </p>
        </div>
      </div>
    </div>
  );
};

export default EVCostCalculator;
