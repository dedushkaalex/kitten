import { useRef, useState } from "react";

import cn from "classnames";

import { useOutsideClick } from "shared/lib";

import styles from "./Select.module.css";

type Option = {
  id: number;
  value: string;
};

interface SelectProps {
  label?: string;
  options: Option[];
  defaultOption?: Option;
  onClick?: (value: string) => void;
}

export const Select = ({
  label,
  options,
  defaultOption,
  onClick,
}: SelectProps) => {
  const [isShowList, setShowList] = useState(false);
  const [currentOption, setCurrentOption] = useState<Option | null>(
    defaultOption || null,
  );

  const selectRef = useRef<HTMLDivElement>(null);

  useOutsideClick(selectRef, () => {
    if (isShowList) {
      setShowList(false);
    }
  });

  const handleSetCurrentOption = (option: Option) => {
    if (option === currentOption) {
      return;
    }

    setCurrentOption(option);
    setShowList(false);

    if (onClick) {
      onClick(option.value);
    }
  };

  const handleListDisplay = () => setShowList((prev) => !prev);

  return (
    <div className={styles["custom-select-container"]} ref={selectRef}>
      <div
        className={cn(styles["selected-text"], {
          [styles.active]: isShowList,
        })}
        onClick={handleListDisplay}
      >
        {label && !!label.length && !currentOption ? label : ""}
        {currentOption && currentOption.value}
      </div>
      {isShowList && (
        <ul className={styles["select-options"]}>
          {options.map((option) => {
            return (
              <li
                className={cn(styles["custom-select-option"], {
                  [styles.option__active]: currentOption === option,
                })}
                key={option.id}
                onClick={() => handleSetCurrentOption(option)}
              >
                {option.value}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
