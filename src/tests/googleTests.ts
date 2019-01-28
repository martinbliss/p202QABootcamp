import { Selector } from 'testcafe';
import { SearchBar, SearchSuggestion, SearchResult } from '../api/google';

fixture('Getting Started').page('http://www.google.com');

test('Can search for cats and see that a search suggestion "cats" is present', async (test) => {
    await test.typeText(SearchBar, 'cats')
        .expect(SearchSuggestion('cats').textContent).eql('cats');
});

test('Can see the first result of searching for cats is a complete guide to caring for cats', async (test) => {
    await test.typeText(SearchBar, 'cats')
        .click(SearchSuggestion('cats'))
        // .wait(3000)
        .expect(SearchResult('Complete Guide to Caring for Cats | Cat Breed Information, Cat ...').exists).eql(true);
});
test('Can search for dogs', async (test) => {
    await test.typeText(SearchBar, 'dogs')
        .pressKey('enter')
        .expect(SearchResult('Dog - Wikipedia').exists).eql(true);
});

test('Can see the first result of searching for dogs is "Complete Guide to Caring for Dogs | Dog Breed Information, Dog ..."', async (test) => {
    await test.typeText(SearchBar, 'dogs')
        .pressKey('enter')
        .expect(SearchResult('Complete Guide to Caring for Dogs | Dog Breed Information, Dog ...').exists).eql(true);
});

test('Can search for Disney', async test => {
    await test.typeText(SearchBar, 'Disney')
        .pressKey('enter')
        .expect(SearchResult('Disney (@Disney) · Twitter').exists).eql(true);
});

test('Can see the first result of searching for Disney is "Walt Disney World Resort in Orlando, Florida"', async test => {
    await test.typeText(SearchBar, 'Disney')
        .pressKey('enter')
        .expect(SearchResult('Walt Disney World Resort in Orlando, Florida').exists).eql(true);
});

