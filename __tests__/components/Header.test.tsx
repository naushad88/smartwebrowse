import { render, screen } from '@testing-library/react'
import Header from '@/components/Header'

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} />
  },
}))

describe('Header', () => {
  it('renders the logo', () => {
    render(<Header />)
    const logo = screen.getByAltText('Robust Softech')
    expect(logo).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Header />)
    
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<Header />)
    const ctaButton = screen.getByText('Get Started')
    expect(ctaButton).toBeInTheDocument()
  })

  it('has proper accessibility attributes', () => {
    render(<Header />)
    
    const mobileMenuButton = screen.getByLabelText('Toggle menu')
    expect(mobileMenuButton).toBeInTheDocument()
  })
})





