const lifeComponents = [
  {
    id: 1,
    name: "Physical Environment",
    suggestion: {
      title: "Please rate this life component based on the following aspects",
      text:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam esse eum error impedit rem aliquid omnis. Deleniti possimus nobis vero!"
    },
    score: 0,
    icon: "laptop-house",
    category: "practical"
  },
  {
    id: 2,
    name: "Finances",
    suggestion: {
      title: "Please rate this life component based on the following aspects",
      text:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam esse eum error impedit rem aliquid omnis. Deleniti possimus nobis vero!"
    },
    score: 0,
    icon: "donate",
    category: "practical"
  },
  {
    id: 3,
    name: "Career",
    suggestion: {
      title: "How happy are you with your career at the moment?",
      text:
        "Are you in the job you want to be in? Are you advancing in your career? Are you paid what you think is fair? Do you have a plan to move forward in your career?"
    },
    score: 0,
    icon: "user-tie",
    category: "practical"
  },
  {
    id: 4,
    name: "General Happiness",
    suggestion: {
      title: "Please rate your General Happiness out of 10",
      text:
        "How happy are you? How happy do you feel in a general context.  Don’t worry too much about details, or why, that will come later… but as a gut feel – how happy are you out of 10?"
    },
    score: 0,
    icon: "smile",
    category: "wellbeing"
  },
  {
    id: 5,
    name: "Mental Health",
    suggestion: {
      title: "Please rate how you currently feel about your Mental Health out of 10",
      text:
        "How happy are you with your Mental Health? Do you feel ok? Are you feeling positive or Low at the moment? Do you have any issues with stress, anxiety, depression?"
    },
    score: 0,
    icon: "brain",
    category: "wellbeing"
  },
  {
    id: 6,
    name: "Physical Health",
    suggestion: {
      title:
        "Please rate how happy you feel about your Physical Health 1 = totally unhappy. 10 = I could not be happier with my physical health",
      text:
        "How are you feeling physically? Are you healthy? Are you fit? Are you in the physical shape you want to be in? Any aches and pains?"
    },
    score: 0,
    icon: "heartbeat",
    category: "wellbeing"
  },
  {
    id: 7,
    name: "Friends",
    suggestion: {
      title: "Please rate your happiness with regards to how you feel about your friendships out of 10",
      text:
        "Do you have enough friends? Do you see them? Do you speak to them as much as you would like? Do they have a positive effect on your life? Would you like to see them more or maybe less? How are you getting on with your best friends?"
    },
    score: 0,
    icon: "user-friends",
    category: "relationships"
  },
  {
    id: 8,
    name: "Family",
    suggestion: {
      title:
        "Family comes in many varieties – how happy do you feel about the relationships you have with the people you consider your family?",
      text:
        "Whether blood related, or related through love, how do you feel about the relationships with your family? Would you like to be closer? See more/less of each other? Maybe you have a great relationship with some family members and not others. Overall, how happy do you currently feel about your family relationships."
    },
    score: 0,
    icon: "users",
    category: "relationships"
  },
  {
    id: 9,
    name: "Love Life",
    suggestion: {
      title: "Aaah – Romance and Relationships… Love!.. How do you feel about yours?",
      text:
        "Is your current Love Life set up working for you? Are you happy with it?– whether a special someone or even if you aren’t ready for that commitment – how happy are you with your relationship status, can you improve it? how? Do you want to make room for more romance?"
    },
    score: 0,
    icon: "heart",
    category: "relationships"
  },
  {
    id: 10,
    name: "Spirituality",
    suggestion: {
      title: "Please rate this life component based on the following aspects",
      text:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam esse eum error impedit rem aliquid omnis. Deleniti possimus nobis vero!"
    },
    score: 0,
    icon: "place-of-worship",
    category: "higher-thoughts"
  },
  {
    id: 11,
    name: "Purpose",
    suggestion: {
      title: "Please rate this life component based on the following aspects",
      text:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam esse eum error impedit rem aliquid omnis. Deleniti possimus nobis vero!"
    },
    score: 0,
    icon: "bullseye",
    category: "higher-thoughts"
  },
  {
    id: 12,
    name: "Self Worth",
    suggestion: {
      title: "Please rate this life component based on the following aspects",
      text:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam esse eum error impedit rem aliquid omnis. Deleniti possimus nobis vero!"
    },
    score: 0,
    icon: "hand-holding-heart",
    category: "higher-thoughts"
  },
  {
    id: 13,
    name: "Fun and Recreation",
    suggestion: {
      title:
        "This is all about the stuff you enjoy doing! How happy are you with the time you spend doing the things you love!",
      text:
        "What do you do in your free time? What do you want to do? What do you enjoy doing? Do you do it enough? Or do you need to do it less? How happy are you with what you do, and how much time you spend doing your hobbies/interests? Fancy trying something new?"
    },
    score: 0,
    icon: "umbrella-beach",
    category: "activity"
  },
  {
    id: 14,
    name: "Contribution to Society",
    suggestion: {
      title: "Please rate this life component based on the following aspects",
      text:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam esse eum error impedit rem aliquid omnis. Deleniti possimus nobis vero!"
    },
    score: 0,
    icon: "hands-helping",
    category: "activity"
  },
  {
    id: 15,
    name: "Personal Development",
    suggestion: {
      title: "Please rate this life component based on the following aspects",
      text:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam esse eum error impedit rem aliquid omnis. Deleniti possimus nobis vero!"
    },
    score: 0,
    icon: "lightbulb",
    category: "activity"
  }
];

export default lifeComponents;
