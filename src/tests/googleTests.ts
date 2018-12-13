import { Selector } from 'testcafe';
import { SearchBar, SearchSuggestion, SearchResult } from '../api/google';

fixture('Getting Started').page('http://www.google.com');

test('Can search for cats and see the first result is for cats', async test => {
    await test.typeText(SearchBar, 'cats')
        .expect(SearchSuggestion('cats').textContent).eql('cats');
});

test('Can see the first result of searching for cats is a complete guide to caring for cats', async test => {
    await test.typeText(SearchBar, 'cats')
        .click(SearchSuggestion('cats'))
        .wait(3000)
        .expect(SearchResult('Complete Guide to Caring for Cats | Cat Breed Information, Cat ...').exists).eql(true);
});