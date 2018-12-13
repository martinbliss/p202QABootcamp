import { Selector } from "testcafe";

export const SearchBar = Selector('[name="q"]');

export const SearchSuggestion = (name: string) => {
    return Selector('.erkvQe').find('span').withText(name);
}

export const SearchResult = (name: string) => {
    return Selector('h3').withText(name);
}