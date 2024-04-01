import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Video, Videos, createClient } from "pexels";
import { PIXELAPI } from "../utils/pixel";
import { ITranslations, LANGUAGE } from "../utils/translations";

interface IAppContextValue {
  theme: "light" | "dark";
  language: "french" | "english";
  toggleLangauge: () => void;
  changeTheme: (t: "light" | "dark") => void;
  text: ITranslations;
  searchBarText: string;
  setSearchBarText: Dispatch<SetStateAction<string>>;
  isMenuSmall: boolean;
  toggleMenuSize: () => void;
  activeMenuText: string;
  activeCatagories: string;
  setActiveCatagories: Dispatch<SetStateAction<string>>;
  video: Video[];
  isFetchingVideo: boolean;
}

interface IAppContextProviderProps {
  children: ReactNode;
}

const AppContext = createContext<IAppContextValue | null>(null);

export const useAppContext = () => {
  const appContext = useContext(AppContext);

  if (!appContext) {
    throw new Error("There is no context");
  }

  return appContext;
};

const client = createClient(PIXELAPI);

export const AppContextProvider = ({ children }: IAppContextProviderProps) => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [language, setLanguage] = useState<"french" | "english">("english");
  const [searchBarText, setSearchBarText] = useState("");
  const [isMenuSmall, setIsMenuSmall] = useState(false);
  const [activeMenuText, setActiveMenuText] = useState("home");
  const [activeCatagories, setActiveCatagories] = useState("all");
  const [video, setVideo] = useState<Video[]>([]);
  const [isFetchingVideo, setIsFetchingVideo] = useState(false);

  useEffect(() => {
    fetchVideo(activeCatagories);
  }, [activeCatagories]);

  useEffect(() => {
    if (searchBarText !== "") {
      fetchVideo(searchBarText);
    }
  }, [searchBarText]);

  const fetchVideo = async (query: string) => {
    setIsFetchingVideo(true);
    try {
      const response = await client.videos.search({ query, per_page: 44 });
      setVideo((response as Videos).videos);
      console.log("fetching video response : ", (response as Videos).videos);
    } catch (error) {
      console.log("--- there was an error occur for fetching video ----");
    }

    setIsFetchingVideo(false);
  };

  const changeTheme = (t: "light" | "dark") => {
    if (t === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const toggleLangauge = () => {
    if (language === "english") {
      setLanguage("french");
    } else {
      setLanguage("english");
    }
  };

  const toggleMenuSize = () => {
    setIsMenuSmall((state) => !state);
  };

  const value = {
    theme,
    changeTheme,
    language,
    toggleLangauge,
    text: LANGUAGE[language],
    searchBarText,
    setSearchBarText,
    isMenuSmall,
    toggleMenuSize,
    activeMenuText,
    activeCatagories,
    setActiveCatagories,
    video,
    isFetchingVideo,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
