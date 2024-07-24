import React, { useContext, useState } from "react";
import { BsLayoutThreeColumns } from "react-icons/bs";
import { Mycontext } from "../../utils/Context";
import down from "../../Assets/down.svg";
import up from "../../Assets/up.svg";
import "./influencers.css";
import verified from "../../Assets/verified.svg";
import inf1 from "../../Assets/inf1.png";
import inf2 from "../../Assets/inf2.png";
import inf3 from "../../Assets/inf3.png";
import fb from "../../Assets/Facebook.svg";
import insta from "../../Assets/instagram.svg";
import snap from "../../Assets/Snapchat.svg";
import x from "../../Assets/X.svg";
import cross from "../../Assets/cross.svg";

const influencers = [
  {
    id: 1,
    name: "Ashwini Singh",
    location: "New Delhi",
    categories: ["Fashion", "Lifestyle"],
    image: inf1,
    isVerified: true,
    social: {
      facebook: "test",
      instagram: "test",
      snapchat: "test",
      x: "test",
    },
  },
  {
    id: 2,
    name: "Gautam Sachdeva",
    location: "Mumbai",
    categories: ["Fashion", "Lifestyle"],
    image: inf2,
    isVerified: true,
    social: {
      facebook: "test",
      instagram: "test",
      snapchat: "test",
      x: "test",
    },
  },
  {
    id: 3,
    name: "Alok",
    location: "New Delhi",
    categories: ["Lifestyle"],
    image: inf3,
    isVerified: false,
    social: {
      facebook: "test",
      instagram: "test",
      snapchat: "test",
      x: "test",
    },
  },
  {
    id: 1,
    name: "Ashwini Singh",
    location: "New Delhi",
    categories: ["Fashion", "Lifestyle"],
    image: inf1,
    isVerified: true,
    social: {
      facebook: "test",
      instagram: "test",
      snapchat: "test",
      x: "test",
    },
  },
  {
    id: 2,
    name: "Gautam Sachdeva",
    location: "Mumbai",
    categories: ["Fashion", "Lifestyle"],
    image: inf2,
    isVerified: true,
    social: {
      facebook: "test",
      instagram: "test",
      snapchat: "test",
      x: "test",
    },
  },
  {
    id: 3,
    name: "Alok",
    location: "New Delhi",
    categories: ["Lifestyle"],
    image: inf3,
    isVerified: false,
    social: {
      facebook: "test",
      instagram: "test",
      snapchat: "test",
      x: "test",
    },
  },
  {
    id: 1,
    name: "Ashwini Singh",
    location: "New Delhi",
    categories: ["Fashion", "Lifestyle"],
    image: inf1,
    isVerified: true,
    social: {
      facebook: "test",
      instagram: "test",
      snapchat: "test",
      x: "test",
    },
  },
  {
    id: 2,
    name: "Gautam Sachdeva",
    location: "Mumbai",
    categories: ["Fashion", "Lifestyle"],
    image: inf2,
    isVerified: true,
    social: {
      facebook: "test",
      instagram: "test",
      snapchat: "test",
      x: "test",
    },
  },
  {
    id: 3,
    name: "Alok",
    location: "New Delhi",
    categories: ["Lifestyle"],
    image: inf3,
    isVerified: false,
    social: {
      facebook: "test",
      instagram: "test",
      snapchat: "test",
      x: "test",
    },
  },
];

const locations = ["NewDelhi", "Mumbai", "Hyderabad", "Nagpur"];
const categories = [
  "Fashion",
  "Lifestyle",
  "Doctor",
  "Beauty",
  "Automobile",
  "Fitness",
  "Food",
  "Travel",
];
const gender = ["Male", "Female", "Other"];
const reach = ["nano-1kTo10k", "micro-10kto100k", "macro-100kto1M", "mega11M+"];
const followers = [
  "1000-10000",
  "10000-50000",
  "500000-100000",
  "100000-500000",
  "500000-10",
];
const budget = [];
const rating = [];
const age = [
  "12-17 years",
  "18-24 years",
  "25-34 years",
  "35-44 years",
  "45-54 years",
  "55-64 years",
  "64+ years",
];

const filters = {
  Location: locations,
  Categories: categories,
  Gender: gender,
  Reach: reach,
  Followers: followers,
  Budget: budget,
  Rating: rating,
  Age: age,
};

export const DiscoverInfluencers = () => {
  const contextState = useContext(Mycontext);
  const expanded = contextState.expanded;
  const [selectedFilters, setFilters] = useState([]);
  const handleRemoveItem = (item) => {
    let updatedFilters = selectedFilters.filter((e) => {
      return e != item;
    });
    setFilters(updatedFilters);
  };
  const [columns, setColumns] = useState(3);
  const setThreeColumns = () => setColumns(3);
  const setFourColumns = () => setColumns(4);

  return (
    <div
      className="flex"
      class={` flex relative top-20 ${
        !expanded
          ? "left-[100px] w-[calc(100%-110px)]"
          : "left-[350px] w-[calc(100%-360px)]"
      }  overflow-y-auto  bg-[#F5F5F5] space-y-4 p-4 rounded-[14px] my-4 `}
      style={{ flexDirection: "column" }}
    >
      <div className="w-4/4 p-4 rounded-[10px] border-r bg-white font-blue font-bold text-lg">
        Discover Influencer
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <aside className="w-1/4 p-4 rounded-[10px] border-r bg-white">
          <Panel
            options={filters}
            selected={selectedFilters}
            setSelectedFilters={setFilters}
          />
        </aside>
        <main className="w-3/4 p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">All Influencers</h2>
            <div className="flex space-x-2">
          <button
            onClick={setThreeColumns}
          >
            <BsLayoutThreeColumns />
          </button>
          <button
            onClick={setFourColumns}
          >

          </button>
        </div>
          </div>
          <div className="filter-btn-panel flex flex-wrap">
            {selectedFilters &&
              selectedFilters.map((item) => {
                return (
                  <div
                    className="filter-btn"
                    onClick={() => {
                      handleRemoveItem(item);
                    }}
                  >
                    {item}
                    <img src={cross}></img>
                  </div>
                );
              })}
          </div>
          <div
            className={`grid gap-4 ${
              columns === 3 ? "grid-cols-3" : "grid-cols-4"
            }`}
          >
            {influencers.map((influencer) => (
              <Card key={influencer.id} influencer={influencer} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

const Card = ({ influencer }) => {
  const getLogoBasedOnSocial = (platform) => {
    switch (platform) {
      case "facebook": {
        return fb;
      }
      case "instagram": {
        return insta;
      }
      case "snapchat": {
        return snap;
      }
      case "x": {
        return x;
      }
      default: {
        return null;
      }
    }
  };
  return (
    <div className="border bg-white rounded-lg">
      <div className="inf-cover">
        <img
          src={influencer.image}
          alt={influencer.name}
          className="w-full h-40 object-cover rounded-md mb-4 inf-cover"
        />
        <button className="view-inf-btn">View Profile</button>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg flex gap-1">
          {influencer.name}
          {influencer.isVerified ? <img src={verified} /> : null}
        </h3>
        <div className="flex gap-2 space-x-2 mt-2">
          {Object.keys(influencer.social).map((key) => {
            return <img src={getLogoBasedOnSocial(key)} />;
          })}
        </div>
      </div>
    </div>
  );
};
const Panel = ({ options, selected, setSelectedFilters }) => {
  return (
    <div>
      {Object.keys(options).map((item) => {
        return (
          <div className="mb-4">
            <DropDown
              selected={selected}
              setSelectedFilters={setSelectedFilters}
              title={item}
              values={options[item]}
            ></DropDown>
          </div>
        );
      })}
    </div>
  );
};
const DropDown = ({ title, values, setSelectedFilters, selected }) => {
  const [expanded, setExpanded] = useState(false);

  const handleOnChange = (e) => {
    if (e.target.checked) {
      console.log(e.target.title);
      setSelectedFilters([...selected, e.target.title]);
    } else {
      let updated = selected.filter((item) => {
        return item != e.target.title;
      });
      setSelectedFilters(updated);
    }
  };
  return (
    <div>
      <div
        class="select-none"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
        onClick={() => {
          setExpanded(!expanded);
        }}
      >
        <div className="font-bold font-blue">{title}</div>
        <img src={expanded ? down : up}></img>
      </div>
      <div>
        {expanded ? (
          <div>
            {values.map((item) => {
              return (
                <div className="space-y-2">
                  <label className="block flex justify-between items-center">
                    {item}
                    <input
                      onChange={handleOnChange}
                      type="checkbox"
                      checked={selected.includes(item)}
                      className="text-lightBlue"
                      title={item}
                    />
                  </label>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
};
