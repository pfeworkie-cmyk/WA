'use client';

import { useState } from 'react';
import { Search, MapPin, Wind, Droplets, Eye, Gauge } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

const sampleWeatherData = {
  city: 'San Francisco',
  country: 'US',
  temperature: 72,
  feelsLike: 70,
  condition: 'Partly Cloudy',
  humidity: 65,
  windSpeed: 12,
  visibility: 10,
  pressure: 1013,
  uvIndex: 6,
  sunrise: '6:45 AM',
  sunset: '8:30 PM',
  forecast: [
    { day: 'Mon', high: 75, low: 62, condition: 'Sunny', icon: '☀️' },
    { day: 'Tue', high: 73, low: 61, condition: 'Cloudy', icon: '☁️' },
    { day: 'Wed', high: 68, low: 58, condition: 'Rainy', icon: '🌧️' },
    { day: 'Thu', high: 70, low: 59, condition: 'Partly Cloudy', icon: '⛅' },
    { day: 'Fri', high: 76, low: 63, condition: 'Sunny', icon: '☀️' },
  ],
};

export default function Home() {
  const [city, setCity] = useState('San Francisco');
  const [weatherData] = useState(sampleWeatherData);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would fetch weather data from an API
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">Weather</h1>
          <p className="text-muted-foreground text-lg">Real-time weather for your location</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="flex-1 relative">
              <Input
                type="text"
                placeholder="Search for a city..."
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="pl-4 py-6 text-base"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            </div>
            <Button type="submit" className="px-6 py-6 bg-primary hover:bg-accent text-primary-foreground">
              Search
            </Button>
          </form>
        </div>

        {/* Current Weather */}
        <Card className="mb-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-0 shadow-lg">
          <div className="p-8 md:p-12">
            <div className="flex items-start justify-between mb-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-primary" />
                  <h2 className="text-2xl font-semibold text-foreground">
                    {weatherData.city}, {weatherData.country}
                  </h2>
                </div>
                <p className="text-muted-foreground">Today</p>
              </div>
              <div className="text-right">
                <div className="text-6xl font-bold text-primary mb-2">{weatherData.temperature}°</div>
                <p className="text-lg text-foreground font-medium">{weatherData.condition}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white/50 dark:bg-slate-800/50 rounded-lg p-4">
                <p className="text-sm text-muted-foreground mb-1">Feels Like</p>
                <p className="text-2xl font-semibold text-foreground">{weatherData.feelsLike}°</p>
              </div>
              <div className="bg-white/50 dark:bg-slate-800/50 rounded-lg p-4">
                <p className="text-sm text-muted-foreground mb-1">Humidity</p>
                <p className="text-2xl font-semibold text-foreground">{weatherData.humidity}%</p>
              </div>
              <div className="bg-white/50 dark:bg-slate-800/50 rounded-lg p-4">
                <p className="text-sm text-muted-foreground mb-1">Wind Speed</p>
                <p className="text-2xl font-semibold text-foreground">{weatherData.windSpeed} mph</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-3">
                <Wind className="w-5 h-5 text-accent" />
                <div>
                  <p className="text-xs text-muted-foreground">Wind</p>
                  <p className="text-sm font-semibold text-foreground">{weatherData.windSpeed} mph</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Droplets className="w-5 h-5 text-accent" />
                <div>
                  <p className="text-xs text-muted-foreground">Humidity</p>
                  <p className="text-sm font-semibold text-foreground">{weatherData.humidity}%</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Eye className="w-5 h-5 text-accent" />
                <div>
                  <p className="text-xs text-muted-foreground">Visibility</p>
                  <p className="text-sm font-semibold text-foreground">{weatherData.visibility} mi</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Gauge className="w-5 h-5 text-accent" />
                <div>
                  <p className="text-xs text-muted-foreground">Pressure</p>
                  <p className="text-sm font-semibold text-foreground">{weatherData.pressure} mb</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* 5-Day Forecast */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-4">5-Day Forecast</h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {weatherData.forecast.map((day, index) => (
              <Card key={index} className="bg-white dark:bg-slate-800 border-0 shadow-md hover:shadow-lg transition-shadow">
                <div className="p-6 text-center">
                  <h4 className="font-semibold text-foreground mb-3">{day.day}</h4>
                  <div className="text-4xl mb-3">{day.icon}</div>
                  <p className="text-sm text-muted-foreground mb-4">{day.condition}</p>
                  <div className="flex justify-center gap-3">
                    <div>
                      <p className="text-xs text-muted-foreground">High</p>
                      <p className="text-lg font-bold text-primary">{day.high}°</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Low</p>
                      <p className="text-lg font-bold text-muted-foreground">{day.low}°</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
