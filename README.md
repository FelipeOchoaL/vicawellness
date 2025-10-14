# VicaWellness

A comprehensive health and wellness platform built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Personalized Health Plans**: Customized wellness plans tailored to your goals
- **Fitness Tracking**: Monitor workouts and track progress
- **Mental Wellness**: Access meditation guides and stress management tools
- **Sleep Optimization**: Improve sleep quality with personalized recommendations
- **Community Support**: Connect with like-minded individuals
- **Progress Analytics**: Visualize your wellness journey with detailed insights
- **Mobile Responsive**: Optimized for all devices
- **Privacy & Security**: Enterprise-grade security for your health data

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Context + Hooks
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/vicawellness.git
cd vicawellness
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp env.example .env.local
```

4. Update the environment variables in `.env.local` with your actual values.

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
src/
├── app/                 # Next.js App Router pages
├── components/          # Reusable UI components
│   ├── ui/             # Basic UI components
│   ├── forms/          # Form components
│   └── layout/         # Layout components
├── lib/                # Utility functions and configurations
├── hooks/              # Custom React hooks
├── context/            # React Context providers
├── types/              # TypeScript type definitions
├── utils/              # Helper functions
└── styles/             # Global styles and CSS
```

## 🎨 Design System

The project uses a custom design system built on Tailwind CSS with:

- **Primary Colors**: Blue-based palette for trust and wellness
- **Secondary Colors**: Gray-based palette for neutral elements
- **Typography**: Inter font family for modern, readable text
- **Components**: Reusable UI components with consistent styling
- **Responsive Design**: Mobile-first approach with breakpoints

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set up environment variables in Vercel dashboard
4. Deploy automatically on every push

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you have any questions or need help, please:

1. Check the [documentation](docs/)
2. Search existing [issues](https://github.com/yourusername/vicawellness/issues)
3. Create a new issue if needed

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Lucide](https://lucide.dev/) for the beautiful icons
- [Vercel](https://vercel.com/) for the deployment platform

---

Made with ❤️ by the VicaWellness Team
