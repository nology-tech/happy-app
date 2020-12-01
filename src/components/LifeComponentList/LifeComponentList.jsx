import React from "react";
import styles from "./LifeComponentList.module.scss";
import LifeComponent from "../LifeComponent";

const LifeComponentList = () => {

  const lifeComponents = [
    { id: 1,
      name: "Physical Environment",
      suggestion: ""
  },
    { id: 2,
      name: "Finances",
      suggestion: ""
  },
    { id: 3,
      name: "Career",
      suggestion: ""
  },
    { id: 4,
      name: "General Health",
      suggestion: ""
  },
    { id: 5,
      name: "Mental Fitness",
      suggestion: ""
  },
    { id: 6,
      name: "Physical Fitness",
      suggestion: ""
  },
    { id: 7,
      name: "Friends",
      suggestion: ""
  },
    { id: 8,
      name: "Family",
      suggestion: ""
  },
    { id: 9,
      name: "Love life",
      suggestion: ""
  },
    { id: 10,
      name: "Spirituality",
      suggestion: ""
  },
    { id: 11,
      name: "Purpose",
      suggestion: ""
  },
    { id: 12,
      name: "Self Worth",
      suggestion: ""
  },
    { id: 13,
      name: "Fun And recreation",
      suggestion: ""
  },
    { id: 14,
      name: "PlaceholderOne",
      suggestion: ""
  },
    { id: 15,
      name: "PlaceholderTwo",
      suggestion: ""
  }
  ];

  const allLifeComponents = lifeComponents.map((component) => {
    return <LifeComponent key={component.id} lifeComponentNames={component.name} />
  })

  return (
    <>
      {allLifeComponents}
    </>
  );
};

export default LifeComponentList;
