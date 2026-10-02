export const projects = [
  {
    title: "Bifrost: Distributed Search Engine",
    description:
      "A distributed search engine with inverted index, query parsing, and ranking algorithms for efficient information retrieval.",
    tech: [
      "Go",
      "BM25",
      "Inverted Index",
      "Makefile",
    ],
    live: null,
    repo: "https://github.com/Prateet-Github/bifrost",
    image: "/bifrost.png",
    npm: null,
  },
  {
    title: "Streamit: Video Streaming Platform",
    description:
      "A distributed video streaming platform supporting asynchronous transcoding, HLS streaming, Redis analytics, and AWS S3 storage.",
    tech: [
      "Go",
      "Gin",
      "AWS S3",
      "FFmpeg",
      "Asynq",
      "Redis Streams",
      "Cron Jobs",
      "MongoDB",
      "Next.js",
      "TanStack Query",
    ],
    live: "https://streamit-one-xi.vercel.app",
    repo: "https://github.com/Prateet-Github/streamit-server",
    image: "/streamit.png",
    npm: null,
  },
  {
    title: "Sentinel: An API Gateway",
    description:
      "A distributed API gateway with reverse proxy, load balancing, circuit breaking, health checking, and rate limiting for microservices wirh a separate control plane.",
    tech: [
      "Go",
      "gRPC",
      "Protobuf",
      "SQLite",
      "Load Balancer",
      "Circuit Breaker",
      "Health Checker",
      "Rate Limiter"
    ],
    live: null,
    repo: "https://github.com/Prateet-Github/sentinel",
    image: "/sentinel.png",
    npm: null,
  },

  {
    title: "Vibranium: Event-Driven HTTP Server",
    description:
      "A low-level, event-driven HTTP server written from scratch in Rust, built around kqueue and non-blocking TCP I/O.",
    tech: [
      "Rust",
      "Kqueue",
      "TCP",
      "Cargo",
    ],
    live: null,
    repo: "https://github.com/Prateet-Github/vibranium",
    image: "/vibranium.png",
    npm: null,
  },
  {
    title: "Notification System",
    description:
      "A multi-channel notification system supporting email, SMS, push, and in-app delivery with asynchronous processing.",
    tech: [
      "TypeScript",
      "NestJS",
      "Redis Pub/Sub",
      "BullMQ",
      "Firebase Cloud Messaging",
      "Twilio",
      "Resend",
      "PostgreSQL",
      "Nginx",
    ],
    live: null,
    repo: "https://github.com/Prateet-Github/notification-system",
    image: "/notification.png",
    npm: null,
  },
  {
    title: "Payment Service",
    description:
      "A fault-tolerant payment service with idempotent APIs, race-condition-safe processing, retries, and asynchronous job handling.",
    tech: [
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "BullMQ",
      "Stripe",
      "Webhooks",
      "Autocannon",
    ],
    live: null,
    repo: "https://github.com/Prateet-Github/payment-service",
    image: "/payment.png",
    npm: null,
  },


  // {
  //   title: "Authly: Authentication Package",
  //   description:
  //     "A developer-first authentication SDK for building secure and scalable authentication systems with flexible frontend integration.",
  //   tech: ["TypeScript", "NPM", "Node.js", "Express", "React"],
  //   live: "https://authly-eight.vercel.app",
  //   repo: "https://github.com/Prateet-Github/authly-sdk",
  //   image: "/authly.png",
  //   npm: "https://www.npmjs.com/package/authly-sdk",
  // }
];

