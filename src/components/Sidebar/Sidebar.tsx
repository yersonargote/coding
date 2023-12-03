import { useState } from "preact/hooks";
import type { FunctionalComponent } from "preact";

import "@/components/Sidebar/Sidebar.css";

type CategoryChild = {
  text: string;
  slug: string;
};

type Category = {
  text: string;
  type: "category";
  children: CategoryChild[];
};

const categories: Category[] = [
  {
    text: "Terminal",
    type: "category", // Define your custom type if needed
    children: [
      { text: "Windows Terminal", slug: "windows-terminal" },
      { text: "Kitty Terminal", slug: "kitty-terminal" },
    ],
  },
  {
    text: "Languages",
    type: "category",
    children: [
      { text: "Python", slug: "python" },
      { text: "Java", slug: "java" },
      { text: "JavaScript", slug: "javascript" },
      { text: "Rust", slug: "rust" },
    ],
  },
  {
    text: "Editors",
    type: "category",
    children: [
      { text: "VSCode", slug: "vscode" },
      { text: "Neovim", slug: "nvim" },
    ],
  },
];

const Sidebar: FunctionalComponent = () => {
  // Initialize all categories as closed (false)
  const initialCategoryState = categories.reduce((acc, category) => {
    acc[category.text] = false;
    return acc;
  }, {} as Record<string, boolean>);

  const [openCategories, setOpenCategories] = useState(initialCategoryState);

  const toggleCategory = (name: string) => {
    // Toggle the open/close state of the category
    setOpenCategories((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const isCategoryOpen = (name: string) => openCategories[name];

  return (
    <aside class="sidebar">
      {categories.map((category) => (
        <div class="category">
          <button
            onClick={() => toggleCategory(category.text)}
            class={isCategoryOpen(category.text) ? "open" : ""}
          >
            {category.text}
          </button>

          {isCategoryOpen(category.text) && (
            <div class="children">
              {category.children.map((child) => (
                <a href={`/${child.slug}`}>{child.text}</a>
              ))}
            </div>
          )}
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
