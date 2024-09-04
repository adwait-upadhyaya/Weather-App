// atomic components
import TextInput from "../Atomic/TextInput";
import Image from "../Atomic/Image";

// images
import searchIcon from "../../public/images/fa_search.png";
import { ISearchbar } from "../interface/Isearchbar";

// CSS
import "../sass/_searchbar.scss";
import { useState, useRef } from "react";

const Searchbar = (props: ISearchbar) => {
  const [isSuggestionsVisible, setIsSuggestionsVisible] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const { className, handleOnChange, value, handleOnKeyDown, search } = props;

  const handleSuggestionClick = (searchItem: any) => {
    handleOnChange({ target: { value: searchItem.name } });
    setIsSuggestionsVisible(false);

    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleOnChange(event);
    setIsSuggestionsVisible(true);
  };

  return (
    <div className={className}>
      <TextInput
        placeholder={"Search Location..."}
        id={"searchbar"}
        handleOnChange={handleInputChange}
        handleOnKeyDown={handleOnKeyDown}
        value={value}
        ref={inputRef} // Attach the ref to the TextInput
      />
      {isSuggestionsVisible && search?.length > 0 && (
        <ul className="searchbar__suggestions">
          {search?.map((searchItem, index) => (
            <li key={index} onClick={() => handleSuggestionClick(searchItem)}>
              {searchItem.name}, {searchItem.country}
            </li>
          ))}
        </ul>
      )}
      <Image src={searchIcon} width={28} height={28} />
    </div>
  );
};

export default Searchbar;
