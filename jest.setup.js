import '@testing-library/jest-dom'

// Mock Next.js router
jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '/',
      query: {},
      asPath: '/',
      push: jest.fn(),
      pop: jest.fn(),
      reload: jest.fn(),
      back: jest.fn(),
      prefetch: jest.fn().mockResolvedValue(undefined),
      beforePopState: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn(),
      },
      isFallback: false,
    }
  },
}))

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} />
  },
}))

// Mock Next.js Link component
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href, ...props }) => {
    return <a href={href} {...props}>{children}</a>
  },
}))

// Mock Framer Motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
    section: ({ children, ...props }) => <section {...props}>{children}</section>,
    article: ({ children, ...props }) => <article {...props}>{children}</article>,
    nav: ({ children, ...props }) => <nav {...props}>{children}</nav>,
    header: ({ children, ...props }) => <header {...props}>{children}</header>,
    footer: ({ children, ...props }) => <footer {...props}>{children}</footer>,
    main: ({ children, ...props }) => <main {...props}>{children}</main>,
    aside: ({ children, ...props }) => <aside {...props}>{children}</aside>,
    h1: ({ children, ...props }) => <h1 {...props}>{children}</h1>,
    h2: ({ children, ...props }) => <h2 {...props}>{children}</h2>,
    h3: ({ children, ...props }) => <h3 {...props}>{children}</h3>,
    h4: ({ children, ...props }) => <h4 {...props}>{children}</h4>,
    h5: ({ children, ...props }) => <h5 {...props}>{children}</h5>,
    h6: ({ children, ...props }) => <h6 {...props}>{children}</h6>,
    p: ({ children, ...props }) => <p {...props}>{children}</p>,
    span: ({ children, ...props }) => <span {...props}>{children}</span>,
    button: ({ children, ...props }) => <button {...props}>{children}</button>,
    a: ({ children, ...props }) => <a {...props}>{children}</a>,
    ul: ({ children, ...props }) => <ul {...props}>{children}</ul>,
    ol: ({ children, ...props }) => <ol {...props}>{children}</ol>,
    li: ({ children, ...props }) => <li {...props}>{children}</li>,
    form: ({ children, ...props }) => <form {...props}>{children}</form>,
    input: (props) => <input {...props} />,
    textarea: ({ children, ...props }) => <textarea {...props}>{children}</textarea>,
    select: ({ children, ...props }) => <select {...props}>{children}</select>,
    option: ({ children, ...props }) => <option {...props}>{children}</option>,
    label: ({ children, ...props }) => <label {...props}>{children}</label>,
    fieldset: ({ children, ...props }) => <fieldset {...props}>{children}</fieldset>,
    legend: ({ children, ...props }) => <legend {...props}>{children}</legend>,
    table: ({ children, ...props }) => <table {...props}>{children}</table>,
    thead: ({ children, ...props }) => <thead {...props}>{children}</thead>,
    tbody: ({ children, ...props }) => <tbody {...props}>{children}</tbody>,
    tr: ({ children, ...props }) => <tr {...props}>{children}</tr>,
    th: ({ children, ...props }) => <th {...props}>{children}</th>,
    td: ({ children, ...props }) => <td {...props}>{children}</td>,
    caption: ({ children, ...props }) => <caption {...props}>{children}</caption>,
    colgroup: ({ children, ...props }) => <colgroup {...props}>{children}</colgroup>,
    col: (props) => <col {...props} />,
    tfoot: ({ children, ...props }) => <tfoot {...props}>{children}</tfoot>,
    address: ({ children, ...props }) => <address {...props}>{children}</address>,
    article: ({ children, ...props }) => <article {...props}>{children}</article>,
    aside: ({ children, ...props }) => <aside {...props}>{children}</aside>,
    blockquote: ({ children, ...props }) => <blockquote {...props}>{children}</blockquote>,
    dd: ({ children, ...props }) => <dd {...props}>{children}</dd>,
    dl: ({ children, ...props }) => <dl {...props}>{children}</dl>,
    dt: ({ children, ...props }) => <dt {...props}>{children}</dt>,
    figcaption: ({ children, ...props }) => <figcaption {...props}>{children}</figcaption>,
    figure: ({ children, ...props }) => <figure {...props}>{children}</figure>,
    hr: (props) => <hr {...props} />,
    noscript: ({ children, ...props }) => <noscript {...props}>{children}</noscript>,
    pre: ({ children, ...props }) => <pre {...props}>{children}</pre>,
    section: ({ children, ...props }) => <section {...props}>{children}</section>,
    summary: ({ children, ...props }) => <summary {...props}>{children}</summary>,
    details: ({ children, ...props }) => <details {...props}>{children}</details>,
    abbr: ({ children, ...props }) => <abbr {...props}>{children}</abbr>,
    acronym: ({ children, ...props }) => <acronym {...props}>{children}</acronym>,
    cite: ({ children, ...props }) => <cite {...props}>{children}</cite>,
    code: ({ children, ...props }) => <code {...props}>{children}</code>,
    del: ({ children, ...props }) => <del {...props}>{children}</del>,
    dfn: ({ children, ...props }) => <dfn {...props}>{children}</dfn>,
    em: ({ children, ...props }) => <em {...props}>{children}</em>,
    i: ({ children, ...props }) => <i {...props}>{children}</i>,
    ins: ({ children, ...props }) => <ins {...props}>{children}</ins>,
    kbd: ({ children, ...props }) => <kbd {...props}>{children}</kbd>,
    mark: ({ children, ...props }) => <mark {...props}>{children}</mark>,
    q: ({ children, ...props }) => <q {...props}>{children}</q>,
    s: ({ children, ...props }) => <s {...props}>{children}</s>,
    samp: ({ children, ...props }) => <samp {...props}>{children}</s>,
    small: ({ children, ...props }) => <small {...props}>{children}</small>,
    strong: ({ children, ...props }) => <strong {...props}>{children}</strong>,
    sub: ({ children, ...props }) => <sub {...props}>{children}</sub>,
    sup: ({ children, ...props }) => <sup {...props}>{children}</sup>,
    time: ({ children, ...props }) => <time {...props}>{children}</time>,
    u: ({ children, ...props }) => <u {...props}>{children}</u>,
    var: ({ children, ...props }) => <var {...props}>{children}</var>,
    wbr: (props) => <wbr {...props} />,
  },
  AnimatePresence: ({ children }) => children,
  useInView: () => [jest.fn(), true],
  useAnimation: () => ({
    start: jest.fn(),
    stop: jest.fn(),
    set: jest.fn(),
    play: jest.fn(),
    pause: jest.fn(),
    complete: jest.fn(),
    stop: jest.fn(),
    isAnimating: false,
  }),
}))

// Mock react-intersection-observer
jest.mock('react-intersection-observer', () => ({
  useInView: () => [jest.fn(), true],
}))

// Global test utilities
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))

global.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})

// Mock console methods in tests
const originalError = console.error
beforeAll(() => {
  console.error = (...args) => {
    if (
      typeof args[0] === 'string' &&
      args[0].includes('Warning: ReactDOM.render is no longer supported')
    ) {
      return
    }
    originalError.call(console, ...args)
  }
})

afterAll(() => {
  console.error = originalError
})





