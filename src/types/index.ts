// User types
export interface User {
  id: string
  email: string
  name: string
  avatar?: string
  role: 'user' | 'admin' | 'coach'
  createdAt: Date
  updatedAt: Date
}

// Health & Wellness types
export interface HealthProfile {
  id: string
  userId: string
  age: number
  height: number
  weight: number
  gender: 'male' | 'female' | 'other'
  activityLevel: 'sedentary' | 'light' | 'moderate' | 'active' | 'very_active'
  goals: string[]
  medicalConditions?: string[]
  allergies?: string[]
  medications?: string[]
  createdAt: Date
  updatedAt: Date
}

export interface WellnessGoal {
  id: string
  userId: string
  title: string
  description: string
  category: 'fitness' | 'nutrition' | 'mental_health' | 'sleep' | 'stress' | 'other'
  targetValue: number
  currentValue: number
  unit: string
  targetDate: Date
  status: 'active' | 'completed' | 'paused' | 'cancelled'
  createdAt: Date
  updatedAt: Date
}

export interface Activity {
  id: string
  userId: string
  type: 'exercise' | 'meal' | 'sleep' | 'mood' | 'meditation' | 'other'
  title: string
  description?: string
  duration?: number // in minutes
  calories?: number
  notes?: string
  date: Date
  createdAt: Date
  updatedAt: Date
}

// API Response types
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

// Form types
export interface LoginForm {
  email: string
  password: string
}

export interface RegisterForm {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export interface HealthProfileForm {
  age: number
  height: number
  weight: number
  gender: 'male' | 'female' | 'other'
  activityLevel: 'sedentary' | 'light' | 'moderate' | 'active' | 'very_active'
  goals: string[]
  medicalConditions?: string[]
  allergies?: string[]
  medications?: string[]
}

// Component props types
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  children: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  className?: string
}

export interface InputProps {
  label?: string
  placeholder?: string
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url'
  value?: string
  onChange?: (value: string) => void
  error?: string
  disabled?: boolean
  required?: boolean
  className?: string
}

// Navigation types
export interface NavItem {
  label: string
  href: string
  icon?: React.ComponentType<{ className?: string }>
  children?: NavItem[]
}

// Theme types
export type Theme = 'light' | 'dark' | 'system'

// Loading states
export type LoadingState = 'idle' | 'loading' | 'success' | 'error'
