import express from "express";
import bodyParser from "body-parser";

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3100;

// In-memory data store
let posts = [
  {
    id: 1,
    title: "The Rise of Decentralized Finance",
    content:
      "Decentralized Finance (DeFi) is an emerging and rapidly evolving field in the blockchain industry. It refers to the shift from traditional, centralized financial systems to peer-to-peer finance enabled by decentralized technologies built on Ethereum and other blockchains. With the promise of reduced dependency on the traditional banking sector, DeFi platforms offer a wide range of services, from lending and borrowing to insurance and trading.",
    author: "Alex Thompson",
    imgLink:
      "https://images.unsplash.com/photo-1673255745677-e36f618550d1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEFpfGVufDB8fDB8fHww",
    date: "2023-08-01T10:00:00Z",
  },
  {
    id: 2,
    title: "The Impact of Artificial Intelligence on Modern Businesses",
    content:
      "Artificial Intelligence (AI) is no longer a concept of the future. It's very much a part of our present, reshaping industries and enhancing the capabilities of existing systems. From automating routine tasks to offering intelligent insights, AI is proving to be a boon for businesses. With advancements in machine learning and deep learning, businesses can now address previously insurmountable problems and tap into new opportunities.",
    author: "Mia Williams",
    imgLink:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QWl8ZW58MHx8MHx8fDA%3D",
    date: "2023-08-05T14:30:00Z",
  },
  {
    id: 3,
    title: "Sustainable Living: Tips for an Eco-Friendly Lifestyle",
    content:
      "Sustainability is more than just a buzzword; it's a way of life. As the effects of climate change become more pronounced, there's a growing realization about the need to live sustainably. From reducing waste and conserving energy to supporting eco-friendly products, there are numerous ways we can make our daily lives more environmentally friendly. This post will explore practical tips and habits that can make a significant difference.",
    author: "Samuel Green",
    imgLink:
      "https://images.unsplash.com/photo-1625314887424-9f190599bd56?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEFpfGVufDB8fDB8fHww",
    date: "2023-08-10T09:15:00Z",
  },
  {
    id: 4,
    title: "The Future of Renewable Energy Technologies",
    content:
      "Renewable energy technologies are rapidly advancing and reshaping how we generate power. Innovations in solar, wind, and hydroelectric systems promise to make renewable energy more efficient and accessible. This article discusses the latest advancements and their potential impact on the global energy landscape.",
    author: "Emily Johnson",
    imgLink:
      "https://images.unsplash.com/photo-1604328790190-0b11a865f6b2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8UmVub3dhYmxlIEVuZXJneXxlbnwwfHx8fDEw",
    date: "2023-08-15T12:00:00Z",
  },
  {
    id: 5,
    title: "Exploring the World of Quantum Computing",
    content:
      "Quantum computing is on the brink of revolutionizing the field of computing by solving problems that are currently intractable for classical computers. This post delves into the basics of quantum computing, its potential applications, and the challenges that researchers face.",
    author: "Daniel Martinez",
    imgLink:
      "https://images.unsplash.com/photo-1581092580512-342ea1f6d7d0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFF1YW50dW0lMjBDb21wdXRpbmclMjB8ZW58MHx8fDEw",
    date: "2023-08-20T15:30:00Z",
  },
  {
    id: 6,
    title: "The Evolution of Mobile Technology",
    content:
      "Mobile technology has seen incredible advancements over the past decade, from the introduction of smartphones to the latest 5G networks. This article explores the evolution of mobile technology and what we can expect in the future.",
    author: "Sophia Lee",
    imgLink:
      "https://images.unsplash.com/photo-1573497491200-bc75d6ad4477?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TW9iaWxlJTIwVGVjaG5vbG9neXxlbnwwfHx8fDEw",
    date: "2023-08-25T11:00:00Z",
  },
  {
    id: 7,
    title: "Advances in Space Exploration Technologies",
    content:
      "Space exploration has seen remarkable progress with new technologies making missions to other planets more feasible. This post discusses recent advancements in space exploration, including spacecraft design, propulsion systems, and international collaboration.",
    author: "James Anderson",
    imgLink:
      "https://images.unsplash.com/photo-1545739607-912b0b5c0f4a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3BhY2VleHBsb3JhdGlvbiUyMFRlY2hub2xvZ3l8ZW58MHx8fDEw",
    date: "2023-09-01T10:45:00Z",
  },
  {
    id: 8,
    title: "The Role of Blockchain in Modern Supply Chains",
    content:
      "Blockchain technology is transforming supply chain management by providing transparency and traceability. This article explores how blockchain is being used to enhance supply chain operations and its potential benefits for businesses.",
    author: "Olivia Brown",
    imgLink:
      "https://images.unsplash.com/photo-1617169577748-fbc76fa313e1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8QmxvY2tjaGFpbmUlMjBTeXB0d2F5cyxlbnwwfHx8fDEw",
    date: "2023-09-05T13:00:00Z",
  },
  {
    id: 9,
    title: "The Benefits of Smart Home Technologies",
    content:
      "Smart home technologies are revolutionizing how we interact with our living spaces, offering increased convenience, security, and energy efficiency. This post highlights the benefits of smart home devices and their impact on everyday life.",
    author: "Liam Davis",
    imgLink:
      "https://images.unsplash.com/photo-1547030076-2b25d1b1c1e7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFNtYXJ0JTIwSG9tZXxlbnwwfHx8fDEw",
    date: "2023-09-10T14:15:00Z",
  },
  {
    id: 10,
    title: "Understanding the Internet of Things (IoT)",
    content:
      "The Internet of Things (IoT) is connecting everyday objects to the internet, enabling them to send and receive data. This article explores the concept of IoT, its applications, and the impact it has on various industries.",
    author: "Emma Wilson",
    imgLink:
      "https://images.unsplash.com/photo-1532619158827-439a1cf06b9e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SW50ZXJuZXQlMjBvZiUyMFRoaW5ncyxlbnwwfHx8fDEw",
    date: "2023-09-15T10:30:00Z",
  },
  {
    id: 11,
    title: "The Evolution of Digital Marketing Strategies",
    content:
      "Digital marketing strategies are continually evolving with advancements in technology and changes in consumer behavior. This post covers the latest trends in digital marketing, including social media, SEO, and content marketing.",
    author: "Ava Martin",
    imgLink:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RGlnaXRhbCUyME1hcmtpbmclMjBTdHJhdGVnaWVzfGVufDB8fDEw",
    date: "2023-09-20T14:00:00Z",
  },
  {
    id: 12,
    title: "The Growing Influence of E-Sports",
    content:
      "E-sports have gained significant traction over the past few years, with millions of viewers and players around the world. This article examines the rise of e-sports, its impact on traditional sports, and the future of competitive gaming.",
    author: "Lucas Harris",
    imgLink:
      "https://images.unsplash.com/photo-1655393001768-d946c97d6fd1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QWl8ZW58MHx8MHx8fDA%3D",
    date: "2023-09-25T12:45:00Z",
  },
  {
    id: 13,
    title: "Exploring Innovations in Health Technology",
    content:
      "Health technology is rapidly advancing, with new innovations improving patient care and medical research. This post discusses the latest developments in health tech, including wearable devices, telemedicine, and AI in healthcare.",
    author: "Chloe Clark",
    imgLink:
      "https://plus.unsplash.com/premium_photo-1677269465314-d5d2247a0b0c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QWl8ZW58MHx8MHx8fDA%3D",
    date: "2023-10-01T11:00:00Z",
  },
  {
    id: 14,
    title: "The Rise of Remote Work Culture",
    content:
      "Remote work has become increasingly popular, offering flexibility and new opportunities for both employers and employees. This article explores the rise of remote work culture, its benefits, and the challenges that come with it.",
    author: "Ethan Walker",
    imgLink:
      "https://images.unsplash.com/photo-1625314897518-bb4fe6e95229?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QWl8ZW58MHx8MHx8fDA%3D",
    date: "2023-10-05T09:30:00Z",
  },
  {
    id: 15,
    title: "Navigating the World of Cryptocurrency Investments",
    content:
      "Cryptocurrency investments have become a popular way to diversify portfolios and seek high returns. This post provides insights into cryptocurrency markets, investment strategies, and the risks associated with digital currencies.",
    author: "Mia Thompson",
    imgLink:
      "https://images.unsplash.com/photo-1616161560065-4bbfa1103fde?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8QWl8ZW58MHx8MHx8fDA%3D",
    date: "2023-10-10T16:00:00Z",
  },
  {
    id: 16,
    title: "The Future of Artificial Intelligence in Healthcare",
    content:
      "Artificial Intelligence is transforming healthcare with applications ranging from diagnostics to personalized treatment plans. This article explores the future of AI in healthcare and its potential to revolutionize the industry.",
    author: "Ella Davis",
    imgLink:
      "https://images.unsplash.com/photo-1616161560417-66d4db5892ec?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEFpfGVufDB8fDB8fHww",
    date: "2023-10-15T12:30:00Z",
  },
  {
    id: 17,
    title: "Exploring Advances in Renewable Energy Storage",
    content:
      "Renewable energy storage solutions are crucial for managing the supply and demand of clean energy. This article discusses recent advancements in energy storage technologies and their potential to enhance renewable energy adoption.",
    author: "Noah Robinson",
    imgLink:
      "https://images.unsplash.com/photo-1612066473428-fb6833a0d855?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEFpfGVufDB8fDB8fHww",
    date: "2023-10-20T14:00:00Z",
  },
  {
    id: 18,
    title: "The Growing Field of Robotics in Manufacturing",
    content:
      "Robotics is increasingly being used in manufacturing to improve efficiency and precision. This article explores the latest trends in robotics, their applications in manufacturing, and the benefits they offer.",
    author: "Grace Mitchell",
    imgLink:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEFpfGVufDB8fDB8fHww",
    date: "2023-10-25T11:15:00Z",
  },
  {
    id: 19,
    title: "The Impact of 5G Technology on Connectivity",
    content:
      "5G technology is set to revolutionize connectivity with faster speeds and lower latency. This post examines the potential impact of 5G on various sectors, including telecommunications, IoT, and smart cities.",
    author: "Aiden Carter",
    imgLink:
      "https://images.unsplash.com/photo-1712246754649-119c1cef4a43?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEFpfGVufDB8fDB8fHww",
    date: "2023-11-01T12:00:00Z",
  },
  {
    id: 20,
    title: "The Importance of Data Privacy in the Digital Age",
    content:
      "In the digital age, data privacy is a critical concern for individuals and organizations alike. This article discusses the importance of data privacy, current challenges, and best practices for protecting sensitive information.",
    author: "Sofia Young",
    blogType:  "Apps",
    imgLink:
      "https://images.unsplash.com/photo-1673255745677-e36f618550d1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEFpfGVufDB8fDB8fHww",
    date: "2023-11-05T15:30:00Z",
  },
];


let lastId = parseInt(posts.slice(-1)[0].id);


// GET all posts
app.get("/", (req, res) => {
  console.log(posts);
  res.json(posts);
});

// GET a specific post by id
app.get("/posts/:id", (req, res) => {
  const post = posts.find((p) => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).json({ message: "Post not found" });
  res.json(post);
});

// POST a new post
app.post("/posts", (req, res) => {
  const newId = (lastId += 1);
  const post = {
    id: newId,
    title: req.body.title,
    content: req.body.content,
    blogType: req.body.blogType,
    imgLink: req.body.imgLink,
    author: req.body.author,
    date: new Date(),
  };
  lastId = newId;
  posts.push(post);
  res.status(201).json(post);
});

// PATCH a post when you just want to update one parameter
app.patch("/posts/:id", (req, res) => {
  const post = posts.find((p) => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).json({ message: "Post not found" });

  if (req.body.title) post.title = req.body.title;
  if (req.body.content) post.content = req.body.content;
  if (req.body.author) post.author = req.body.author;

  res.json(post);
});

// DELETE a specific post by providing the post id
app.delete("/posts/:id", (req, res) => {
  const index = posts.findIndex((p) => p.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: "Post not found" });

  posts.splice(index, 1);
  res.json({ message: "Post deleted" });
});

app.listen(port, () => {
  console.log(`api started running on port  ${port}`);
});
