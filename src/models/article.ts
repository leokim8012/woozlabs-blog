export type ArticleCategory = 'ML' | 'Develop' | 'Mathematics' | 'Research' | 'Graphics' | 'Project';

export interface IArticle {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  category: ArticleCategory;
  thumbnailUrl: string;
  notionId: string;
  createdAt: Date;
  updatedAt: Date;
  recommended?: boolean;
}

export const ARTICLES: IArticle[] = [
  {
    id: 'MLLM-as-a-Judge',
    title: 'Assessing Multimodal LLM-as-a-Judge with Vision-Language Benchmark',
    subtitle: 'Can MLLMs effectively serve as judges in the multimodal domain, and how closely do their evaluations align with human preferences?',
    author: 'Kwanwoo',
    category: 'ML',
    recommended: true,
    thumbnailUrl: 'https://mllm-judge.github.io/img/mllm-radar.png',
    notionId: '17a0a6e7f34580cab56cf3a854b7ddac',
    createdAt: new Date('2025-01-11T07:00:00.456Z'),
    updatedAt: new Date('2025-01-11T07:00:00.653Z'),
  },
  {
    id: 'latent-dirichlet-allocation',
    title: 'Latent Dirichlet Allocation - Part.1',
    subtitle: "LDA's main function is not dimension reduction but Topic Modeling, and the definition of Topic Modeling, borrowing from the expression in the paper, is as follows",
    author: 'Kwanwoo',
    category: 'ML',
    recommended: true,
    thumbnailUrl: 'https://miro.medium.com/v2/resize:fit:850/1*VK5R_2YlRx3NbRIMbUxJ8Q.png',
    notionId: '6f1d19cc8e8648069cc93d755aeb14a3',
    createdAt: new Date('2023-12-07T07:00:00.456Z'),
    updatedAt: new Date('2023-12-07T07:00:00.653Z'),
  },
  {
    id: 'transformer-2',
    title: 'From Seq2Seq to Transformer  - Part.2',
    subtitle: 'The transformer model represents another significant leap in the NLP field after the Seq2Seq model and the attention mechanism.',
    author: 'Kwanwoo',
    category: 'ML',
    recommended: true,
    thumbnailUrl: 'https://theaisummer.com/static/72223ef8e0057c450fc293743a85724a/97655/multi-head-attention-peltarion.png',
    notionId: 'c6f655bc5a504797bd7bdf958e4dc36a',
    createdAt: new Date('2023-10-07T07:00:00.456Z'),
    updatedAt: new Date('2023-10-07T07:00:00.653Z'),
  },
  {
    id: 'transformer-1',
    title: 'From Seq2Seq to Transformer  - Part.1',
    subtitle: 'The attention mechanism was proposed to improve the Seq2Seq model. To understand the attention mechanism well, you must understand the Seq2Seq model.',
    author: 'Kwanwoo',
    category: 'ML',
    recommended: true,
    thumbnailUrl: 'https://blogs.nvidia.com/wp-content/uploads/2022/03/Transformer-model-example-aidan-gomez-1280x763.jpg',
    notionId: '4d2516448e5b4b30ab1fc56ff7660c4a',
    createdAt: new Date('2023-10-04T07:00:00.456Z'),
    updatedAt: new Date('2023-10-04T07:00:00.653Z'),
  },
  {
    id: 'generative-ai-2',
    title: 'Generative AI - Part.2 🤖',
    subtitle:
      'The learning and generation principles of Diffusion Models, which model multi-layer transformations and inverse transformations between data distribution and noise distribution, share many similarities with Flow Models.',
    author: 'Kwanwoo',
    category: 'Mathematics',
    recommended: true,
    thumbnailUrl: 'https://cvpr2022-tutorial-diffusion-models.github.io/img/diffusion.png',
    notionId: 'd77b0d1683da4f10850b9b7397c2697e',
    createdAt: new Date('2023-07-13T07:00:00.456Z'),
    updatedAt: new Date('2023-07-13T07:00:00.653Z'),
  },
  {
    id: 'generative-ai-1',
    title: 'Generative AI - Part.1 🤖',
    subtitle:
      "So, on what principle do generative models, the core of generative AI, learn and operate? What does 'generation' mean? In the fields of statistics or machine learning, generation is defined as sampling from a probability distribution in data space, which was not observed or used during the learning process.",
    author: 'Kwanwoo',
    category: 'Mathematics',
    recommended: true,
    thumbnailUrl:
      'https://firebasestorage.googleapis.com/v0/b/woozlabs.appspot.com/o/Blog%2FArticle%2Fgenerative-ai-1%2Fthumbnail%2F1*cmz4S760KzMGjAew9zb7QQ.jpg?alt=media&token=40cc7e78-7cf6-4c6f-9c28-71c96ad86c4c',
    notionId: '974bf6e4dd214a1b955d5b3f9f45a0b9',
    createdAt: new Date('2023-07-12T07:00:00.456Z'),
    updatedAt: new Date('2023-07-12T07:00:00.653Z'),
  },
  {
    id: 'ray-tracing-1',
    title: 'How Ray Tracing works Part.1 🌞',
    subtitle: "Today we'll look at <Ray tracing> the dominant technique used in the graphics industry.",
    author: 'Kwanwoo',
    category: 'Graphics',
    thumbnailUrl:
      'https://firebasestorage.googleapis.com/v0/b/woozlabs.appspot.com/o/Blog%2FArticle%2Fray-tracing-1%2Fthumbnail%2FReflections_02_2560x1400.0.jpeg?alt=media&token=090a3c27-4bdc-47c9-929a-56868db6db6e',
    notionId: 'c1b812f33a014a6e858a1b16cc88c388',
    createdAt: new Date('2022-10-02T07:00:00.456Z'),
    updatedAt: new Date('2022-10-02T07:00:00.653Z'),
  },
  // {
  //   id: 'vue-seo-friendly',
  //   title: 'Creating SEO-friendly SPA with Vue.js + Firebase',
  //   subtitle: 'Creating SEO-friendly SPA with Vue.js + Firebase.',
  //   author: 'Kwanwoo',
  //   category: 'Develop',
  //   thumbnailUrl:
  //     'https://firebasestorage.googleapis.com/v0/b/woozlabs.appspot.com/o/Post%2FhRhfHJwdNhRrzN9jCbW0%2Fthumbnail%2FVue_SEO.png?alt=media&token=9715f55d-589b-4faa-8f62-5af65e288421',
  //   notionId: '02ce25bf2e094b2b993f662d140c938e',
  //   createdAt: new Date('2022-04-11T07:00:00.000Z'),
  //   updatedAt: new Date('2022-04-11T07:00:00.000Z'),
  // },
  // {
  //   id: 'glide',
  //   title: 'GLIDE',
  //   subtitle:
  //     'Towards Photorealistic Image Generation and Editing with Text-Guided Diffusion Models.',
  //   author: 'Kwanwoo',
  //   category: 'Research',
  //   thumbnailUrl:
  //     'https://firebasestorage.googleapis.com/v0/b/woozlabs.appspot.com/o/Post%2FOeJ0vRGHBMk11mP7Wgae%2Fthumbnail%2Fimage-95.png?alt=media&token=61166319-3f9b-4c3b-9f43-53457ca003cd',
  //   notionId: '958ef8a661ea46d0bfbfcb5654c78fd9',
  //   createdAt: new Date('2022-02-04T08:00:00.000Z'),
  //   updatedAt: new Date('2022-02-04T08:00:00.000Z'),
  // },
  // {
  //   id: 'generate-mathmatics',
  //   title: 'Generate Mathematics Problems by Program Synthesis',
  //   subtitle:
  //     'A Neural Network Solves and Generates Mathematics Problems by Program Synthesis: Calculus, Differential Equations, Linear Algebra, and More.',
  //   author: 'Kwanwoo',
  //   category: 'Research',
  //   thumbnailUrl:
  //     'https://firebasestorage.googleapis.com/v0/b/woozlabs.appspot.com/o/Post%2F8JmrSOEN1kGyHyJpYALO%2Fthumbnail%2FFIJH4RrXoAYy1X-.jpg?alt=media&token=f865af82-a493-4f55-8b90-814f5ed319df',
  //   notionId: 'e780077a9e0a4328b53bfa7cb999ca53',
  //   createdAt: new Date('2022-02-04T08:00:00.000Z'),
  //   updatedAt: new Date('2022-02-04T08:00:00.000Z'),
  // },
  // {
  //   id: 'direct-delta-mesh',
  //   title: 'Direct Delta Mesh Skinning Compression with Continuous Examples',
  //   subtitle:
  //     'Direct Delta Mesh (DDM) is a high-quality, direct skinning method with a low setup cost.',
  //   author: 'Kwanwoo',
  //   category: 'Research',
  //   thumbnailUrl:
  //     'https://firebasestorage.googleapis.com/v0/b/woozlabs.appspot.com/o/Post%2FbuIHJlD79tYvnKyrq2ns%2Fthumbnail%2Fteaser.jpg?alt=media&token=9728ed15-5493-4ece-a365-ac320686e1aa',
  //   notionId: 'c82dbdc9f9234a2b85388a082c699890',
  //   createdAt: new Date('2022-02-04T08:00:00.000Z'),
  //   updatedAt: new Date('2022-02-04T08:00:00.000Z'),
  // },
  {
    id: 'image-style-transfer',
    title: 'Image Style Transfer (CNN) 🖼️',
    subtitle: 'Paper Review of Image Style Transfer Using Convolutional Neural Networks.',
    author: 'Kwanwoo',
    category: 'Research',
    thumbnailUrl:
      'https://firebasestorage.googleapis.com/v0/b/woozlabs.appspot.com/o/Post%2FseNG50DNdOqoURLlxEd6%2Fthumbnail%2Fthe_scream.jpg?alt=media&token=5999f697-b8d5-4292-814d-6d0ba738fde0',
    notionId: '6653a3dcedac4b448ea64e3eae3d28d1',
    createdAt: new Date('2022-01-29T08:00:00.000Z'),
    updatedAt: new Date('2022-01-29T08:00:00.000Z'),
  },
  {
    id: 'basic-ml-ops-2',
    title: '02. MLOps: Model Monitoring - Weights and Bias 📚',
    subtitle: 'Basics of MLOps using basic vision project.',
    author: 'Kwanwoo',
    category: 'ML',
    thumbnailUrl:
      'https://firebasestorage.googleapis.com/v0/b/woozlabs.appspot.com/o/Post%2FrDYoMdCLpw7jIkQyVK20%2Fthumbnail%2F6066c22135b89828fead7950_visualize-seamlessly-weights-biases.jpg?alt=media&token=f6fd9df9-168b-4155-9c37-5fcfc216e3d5',
    notionId: '5addb5b2f38140f88d7c6e9056b0a26d',
    createdAt: new Date('2022-01-23T08:00:00.000Z'),
    updatedAt: new Date('2022-01-23T08:00:00.000Z'),
  },
  {
    id: 'physics-based-human-motion-estimation',
    title: 'Physics-based Human Motion Estimation and Synthesis from Videos 🤸‍♀️',
    subtitle: 'Paper review of Physics-based Human Motion Estimation and Synthesis from Videos',
    author: 'Kwanwoo',
    category: 'ML',
    thumbnailUrl:
      'https://firebasestorage.googleapis.com/v0/b/woozlabs.appspot.com/o/Post%2FW2kr3EPzHoesrZdC7EaD%2Fthumbnail%2Fphysics-based-human-motion-estimation-and-synthesis-from-videos-page-1-medium.jpg?alt=media&token=55f5ed10-29fb-4b2a-a709-fdb82f5aa7d8',
    notionId: '3f68d732af1d4296bfd1046cc272d343',
    createdAt: new Date('2022-01-19T08:00:00.000Z'),
    updatedAt: new Date('2022-01-19T08:00:00.000Z'),
  },
  {
    id: 'basic-ml-ops-1',
    title: '01. MLOps: Project Settings 💻',
    subtitle: 'Basics of MLOps using basic vision project.',
    author: 'Kwanwoo',
    category: 'ML',
    thumbnailUrl:
      'https://firebasestorage.googleapis.com/v0/b/woozlabs.appspot.com/o/Post%2FcRvN4bhHtSsr7ZhNVv4b%2Fthumbnail%2Fimg.png?alt=media&token=6d6abda7-0a5a-4955-890f-d1d393def57b',
    notionId: 'cc0a09e33dda4d5f929d885dcd178613',
    createdAt: new Date('2022-01-16T08:00:00.000Z'),
    updatedAt: new Date('2022-01-16T08:00:00.000Z'),
  },
  {
    id: 'gradient-descent',
    title: 'Gradient Descent 🏔️',
    subtitle: 'Gradient descent method is also called as steepest descent method.',
    author: 'Kwanwoo',
    category: 'ML',
    thumbnailUrl:
      'https://firebasestorage.googleapis.com/v0/b/woozlabs.appspot.com/o/Post%2FBjlmJreWBg4l1WWMzU4y%2Fthumbnail%2F99A123355A3A2DAF12.png?alt=media&token=744cba79-7441-42de-9415-5cccad4c5949',
    notionId: '172a04ea21d142c09fbb5bedd7e18bcb',
    createdAt: new Date('2021-10-16T07:00:00.000Z'),
    updatedAt: new Date('2021-10-16T07:00:00.000Z'),
  },
  {
    id: 'ml-adam',
    title: 'Adaptive Moment Estimation (ADAM) 🌈',
    subtitle: 'ADAM is the use of Gradient Descent with Momentum and RMSProp at the same time.',
    author: 'Kwanwoo',
    category: 'ML',
    thumbnailUrl:
      'https://firebasestorage.googleapis.com/v0/b/woozlabs.appspot.com/o/Post%2FvFMrMMxKhYKCNsdIlfcz%2Fthumbnail%2Foptimizers7.gif?alt=media&token=419a41fc-e483-4f82-947a-c1e28b669cc0',
    notionId: '13bf689bcb15470782dab26a722ff88f',
    createdAt: new Date('2021-10-09T07:00:00.000Z'),
    updatedAt: new Date('2021-10-09T07:00:00.000Z'),
  },
  {
    id: 'linear-regression',
    title: 'Linear Regression  📉',
    subtitle: 'Linear regression is a linear approach for modeling the relationship between a scalar response and one or more explanatory variables.',
    author: 'Kwanwoo',
    category: 'ML',
    thumbnailUrl:
      'https://firebasestorage.googleapis.com/v0/b/woozlabs.appspot.com/o/Post%2FD1ybQOcmtjGIXDJ9y5ok%2Fthumbnail%2FNormdist_regression.png?alt=media&token=deed08e5-bf86-4d8d-88bd-2f7ff08fbdd2',
    notionId: 'a11e62c3eb714cc7a054b4114a170869',
    createdAt: new Date('2021-10-09T07:00:00.000Z'),
    updatedAt: new Date('2021-10-09T07:00:00.000Z'),
    // recommended: true,
  },
  {
    id: 'kl-divergence',
    title: 'KL Divergence 🔀',
    subtitle: 'KL Divergence (Kullback-Leibler) also known as Relative Entropy is all about the difference between two distributions.',
    author: 'Kwanwoo',
    category: 'Mathematics',
    thumbnailUrl:
      'https://firebasestorage.googleapis.com/v0/b/woozlabs.appspot.com/o/Post%2FDCdikRVyrxb3RcAjyAw3%2Fthumbnail%2Fmarketing%20expectations%20vs%20reality.png?alt=media&token=09be0683-6fe0-486a-ac91-1de2419bc79d',
    notionId: '9203bf6c455a490588333041d5ce0edf',
    createdAt: new Date('2021-09-27T07:00:00.000Z'),
    updatedAt: new Date('2021-09-27T07:00:00.000Z'),
    recommended: true,
  },
  {
    id: 'bayesian-probability',
    title: 'Bayesian Probability 🧩 ',
    subtitle: 'Bayesian probability is an interpretation of the concept of probability.',
    author: 'Kwanwoo',
    category: 'Mathematics',
    thumbnailUrl:
      'https://firebasestorage.googleapis.com/v0/b/woozlabs.appspot.com/o/Post%2FRb2haDX6ts4pVvtwzGnP%2Fthumbnail%2Fformula-bayes-theorem.png?alt=media&token=90c93026-184a-48d8-8af3-043f849e3ae4',
    notionId: 'e3464120ac524b9fb57cbf77af347e04',
    createdAt: new Date('2021-09-26T07:00:00.000Z'),
    updatedAt: new Date('2021-09-26T07:00:00.000Z'),
    recommended: true,
  },
  {
    id: 'vanilla-gan',
    title: 'Vanilla Generative Adversarial Networks (GAN) Review 🤖',
    subtitle: 'Framework for estimating generative models.',
    author: 'Kwanwoo',
    category: 'Research',
    thumbnailUrl:
      'https://firebasestorage.googleapis.com/v0/b/woozlabs.appspot.com/o/Post%2FFrwarCElLxB1Pz3pRKMI%2Fthumbnail%2Fgan_architecture-1.png?alt=media&token=20d9dcd4-c3e0-4180-9b25-74c992fe03ab',
    notionId: '9c86fb47125247b5aff19e66022173fa',
    createdAt: new Date('2021-09-24T07:00:00.000Z'),
    updatedAt: new Date('2021-09-24T07:00:00.000Z'),
    recommended: true,
  },
];
