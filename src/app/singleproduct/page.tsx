'use client';

import {
  Star,
  StarHalf,
  Facebook,
  Twitter,
  Linkedin,
  Minus,
  Plus,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Sale from '@/components/route';

export default function ProductDetail() {
  const [selectedSize, setSelectedSize] = useState('L');
  const [selectedColor, setSelectedColor] = useState('purple');
  const [quantity, setQuantity] = useState(1);

  const thumbnails = [
    '/sofa/first.png',
    '/sofa/sec.png',
    '/sofa/third.png',
    '/sofa/fourth.png',
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center gap-2 text-sm">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <span>{'>'}</span>
          <span className="text-muted-foreground">Cart</span>
        </div>
      </div>

      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="flex  gap-4">
            <div className="flex sm:flex flex-col gap-4">
              {thumbnails.map((src, index) => (
                <Card
                  key={index}
                  className="flex w-20 h-20 sm:w-16 sm:h-16 lg:w-20 lg:h-20 overflow-hidden bg-[#F9F1E7] cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <Image
                    src={src}
                    alt="Thumbnail"
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </Card>
              ))}
            </div>
            <Card className="flex-1 bg-[#F9F1E7] overflow-hidden">
              <Image
                src="/sofa/imgsofa.png"
                alt="Product main image"
                width={423}
                height={500}
                className="object-cover w-full h-full"
              />
            </Card>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <h1 className="text-3xl lg:text-4xl font-normal">Asgaard Sofa</h1>
            <p className="text-xl lg:text-2xl text-muted-foreground">
              Rs. 250,000.00
            </p>

            {/* Rating */}
            <div className="flex items-center gap-4">
              <div className="flex">
                {[...Array(4)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#FFC700] text-[#FFC700]"
                  />
                ))}
                <StarHalf className="w-5 h-5 fill-[#FFC700] text-[#FFC700]" />
              </div>
              <Separator orientation="vertical" className="hidden md:block h-5" />
              <span className="text-sm text-muted-foreground">
                5 Customer Reviews
              </span>
            </div>

            <p className="text-sm leading-relaxed">
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced
              audio.
            </p>

            {/* Size Selection */}
            <div className="space-y-4">
              <span className="text-sm text-muted-foreground">Size</span>
              <div className="flex gap-4">
                {['L', 'XL', 'XS'].map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? 'default' : 'outline'}
                    className={`w-8 h-8 p-0 ${
                      selectedSize === size ? 'bg-primary' : 'bg-[#F9F1E7]'
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="space-y-4">
              <span className="text-sm text-muted-foreground">Color</span>
              <div className="flex gap-4">
                {[
                  { id: 'purple', color: 'bg-[#816DFA]' },
                  { id: 'black', color: 'bg-black' },
                  { id: 'brown', color: 'bg-primary' },
                ].map(({ id, color }) => (
                  <button
                    key={id}
                    className={`w-8 h-8 rounded-full ${color} ${
                      selectedColor === id
                        ? 'ring-2 ring-offset-2 ring-primary'
                        : ''
                    }`}
                    onClick={() => setSelectedColor(id)}
                  />
                ))}
              </div>
            </div>

            {/* Quantity and Actions */}
            <div className="flex flex-wrap gap-4">
              <Card className="flex items-center gap-4 px-4 py-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="text-xl"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-4 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="text-xl"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </Card>
              <Button className="px-8" variant="outline">
                Add To Cart
              </Button>
              <Button className="px-8" variant="outline">
                + Compare
              </Button>
            </div>

            <Separator />

            {/* Product Details */}
            <div className="space-y-4 text-sm">
              <div className="flex flex-wrap gap-4">
                <span className="text-muted-foreground">SKU</span>
                <span>:</span>
                <span className="text-muted-foreground">SS001</span>
              </div>
              <div className="flex flex-wrap gap-4">
                <span className="text-muted-foreground">Category</span>
                <span>:</span>
                <span className="text-muted-foreground">Sofas</span>
              </div>
              <div className="flex flex-wrap gap-4">
                <span className="text-muted-foreground">Tags</span>
                <span>:</span>
                <span className="text-muted-foreground">
                  Sofa, Chair, Home, Shop
                </span>
              </div>
              <div className="flex flex-wrap gap-4">
                <span className="text-muted-foreground">Share</span>
                <span>:</span>
                <div className="flex gap-4">
                  <Facebook className="w-5 h-5" />
                  <Linkedin className="w-5 h-5" />
                  <Twitter className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col items-center px-4 space-y-8">
        <ul className="flex flex-wrap justify-center gap-4 text-center text-sm">
          <li className="font-bold">Description</li>
          <li className="text-[#9F9F9F]">Additional Information</li>
          <li className="text-[#9F9F9F]">Reviews [5]</li>
        </ul>
        <p className="text-sm text-center text-[#9F9F9F] max-w-4xl">
          Embodying the raw, wayward spirit of rock and roll, the Kilburn
          portable active stereo speaker takes the unmistakable look and sound
          of Marshall, unplugs the chords, and takes the show on the road.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Image
            src="/sofa/img2.png"
            alt="Secondary image"
            width={605}
            height={384}
            className="object-cover w-full"
          />
          <Image
            src="/sofa/img3.png"
            alt="Secondary image"
            width={605}
            height={384}
            className="object-cover w-full"
          />
        </div>
        <Sale />
      </div>
    </div>
  );
}
