import React from "react";
import styles from "./LifeComponentList.module.scss";
import LifeComponent from "../LifeComponent";

const LifeComponentList = () => {

  const lifeComponents = [
    { id: 1,
      name: "Physical Environment",
      suggestion: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam esse eum error impedit rem aliquid omnis. Deleniti possimus nobis vero!'
  },
    { id: 2,
      name: "Finances",
      suggestion: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam esse eum error impedit rem aliquid omnis. Deleniti possimus nobis vero!'
  },
    { id: 3,
      name: "Career",
      suggestion: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam esse eum error impedit rem aliquid omnis. Deleniti possimus nobis vero!'
  },
    { id: 4,
      name: "General Health",
      suggestion: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam esse eum error impedit rem aliquid omnis. Deleniti possimus nobis vero!'
  },
    { id: 5,
      name: "Mental Fitness",
      suggestion: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam esse eum error impedit rem aliquid omnis. Deleniti possimus nobis vero!'
  },
    { id: 6,
      name: "Physical Fitness",
      suggestion: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam esse eum error impedit rem aliquid omnis. Deleniti possimus nobis vero!'
  },
    { id: 7,
      name: "Friends",
      suggestion: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam esse eum error impedit rem aliquid omnis. Deleniti possimus nobis vero!'
  },
    { id: 8,
      name: "Family",
      suggestion: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam esse eum error impedit rem aliquid omnis. Deleniti possimus nobis vero!'
  },
    { id: 9,
      name: "Love life",
      suggestion: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam esse eum error impedit rem aliquid omnis. Deleniti possimus nobis vero!'
  },
    { id: 10,
      name: "Spirituality",
      suggestion: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam esse eum error impedit rem aliquid omnis. Deleniti possimus nobis vero!'
  },
    { id: 11,
      name: "Purpose",
      suggestion: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam esse eum error impedit rem aliquid omnis. Deleniti possimus nobis vero!'
  },
    { id: 12,
      name: "Self Worth",
      suggestion: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam esse eum error impedit rem aliquid omnis. Deleniti possimus nobis vero!'
  },
    { id: 13,
      name: "Fun And recreation",
      suggestion: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam esse eum error impedit rem aliquid omnis. Deleniti possimus nobis vero!'
  },
    { id: 14,
      name: "PlaceholderOne",
      suggestion: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam esse eum error impedit rem aliquid omnis. Deleniti possimus nobis vero!'
  },
    { id: 15,
      name: "PlaceholderTwo",
      suggestion: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam esse eum error impedit rem aliquid omnis. Deleniti possimus nobis vero!'
  }
  ];



  const allLifeComponents = lifeComponents.map((component) => {
    return <LifeComponent lifeComponentSuggestion={component.suggestion}  key={component.id} lifeComponentNames={component.name} />
  })

  return (
    <>
      {allLifeComponents}
    </>
  );
};

export default LifeComponentList;
