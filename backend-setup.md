# 🚀 Configuration Backend UBeer - Solution Rapide

## 1. Base de Données SQLite (Solution Rapide)

### Installation
```bash
npm install sqlite3 better-sqlite3 prisma @prisma/client
```

### Schema Prisma (prisma/schema.prisma)
```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"
}

model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  password  String
  firstName String?
  lastName  String?
  createdAt DateTime @default(now())
  orders    Order[]
}

model Beer {
  id          Int     @id @default(autoincrement())
  name        String
  description String?
  price       Float
  image       String?
  brewery     String?
  type        String?
  alcohol     Float?
  available   Boolean @default(true)
}

model Order {
  id        Int      @id @default(autoincrement())
  userId    Int
  total     Float
  status    String   @default("pending")
  createdAt DateTime @default(now())
  user      User     @relation(fields: [userId], references: [id])
  items     OrderItem[]
}

model OrderItem {
  id      Int   @id @default(autoincrement())
  orderId Int
  beerId  Int
  quantity Int
  price   Float
  order   Order @relation(fields: [orderId], references: [id])
}
```

### Commandes d'initialisation
```bash
npx prisma init
npx prisma db push
npx prisma generate
```

## 2. Configuration CORS (URGENT)

### next.config.js
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,POST,PUT,DELETE,OPTIONS" },
          { key: "Access-Control-Allow-Headers", value: "Content-Type,Authorization" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
```

## 3. Variables d'Environnement Backend

### .env
```env
DATABASE_URL="file:./dev.db"
JWT_SECRET="votre-secret-jwt-super-securise"
STRIPE_SECRET_KEY="sk_test_votre_cle_stripe"
REDIS_URL="redis://localhost:6379"
NEXTAUTH_SECRET="votre-secret-nextauth"
```

## 4. API Routes Essentielles

### /api/beers/route.js
```javascript
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const beers = await prisma.beer.findMany();
    return Response.json(beers);
  } catch (error) {
    return Response.json({ error: 'Failed to fetch beers' }, { status: 500 });
  }
}
```

### /api/auth/login/route.js
```javascript
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const { email, password } = await request.json();
    
    const user = await prisma.user.findUnique({
      where: { email }
    });
    
    if (!user || !await bcrypt.compare(password, user.password)) {
      return Response.json({ error: 'Invalid credentials' }, { status: 401 });
    }
    
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );
    
    return Response.json({
      token,
      user: { id: user.id, email: user.email, firstName: user.firstName }
    });
  } catch (error) {
    return Response.json({ error: 'Login failed' }, { status: 500 });
  }
}
```

## 5. Données de Test (Seed)

### prisma/seed.js
```javascript
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  // Créer un utilisateur de test
  const hashedPassword = await bcrypt.hash('password123', 10);
  
  await prisma.user.create({
    data: {
      email: 'test@ubeer.com',
      password: hashedPassword,
      firstName: 'Test',
      lastName: 'User'
    }
  });

  // Créer des bières de test
  const beers = [
    {
      name: 'IPA Blonde',
      description: 'Une IPA blonde rafraîchissante',
      price: 4.5,
      brewery: 'Brasserie Artisanale',
      type: 'IPA',
      alcohol: 5.2
    },
    {
      name: 'Stout Chocolat',
      description: 'Stout riche aux notes de chocolat',
      price: 5.2,
      brewery: 'Brasserie du Nord',
      type: 'Stout',
      alcohol: 6.8
    }
  ];

  for (const beer of beers) {
    await prisma.beer.create({ data: beer });
  }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
```

### package.json (ajout)
```json
{
  "scripts": {
    "db:seed": "node prisma/seed.js"
  }
}
```

## 6. Commandes de Déploiement

```bash
# Installation
npm install

# Base de données
npx prisma db push
npm run db:seed

# Démarrage
npm run dev
```
