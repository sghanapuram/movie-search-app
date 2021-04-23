import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter });

describe('App', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<App />);
    });
    it('renders app title', () => {
        expect(wrapper.find('.header').text()).toEqual('Movie Search App');
    });
    it('renders input search field', () => {
        expect(wrapper.find('.search-field').exists()).toEqual(true);
    });
    it('Movie search results are not displayed when no data', () => {
        expect(wrapper.find('MovieThumbnail').exists()).toEqual(false);
    });
    // TODO: FIX ME
    // it('fetch movie results when user types in a letter in search field', () => {
    //     const getMovieList = jest.fn();
    //     const search = wrapper.find('input.search-field');
    //     search.simulate('change', { target: 'star'} );
    //     expect(getMovieList).toHaveBeenCalled();
    // });
    // it('Movie search results section', () => {
    //     wrapper.setState({
    //         movieList: [
    //             {
    //                 adult: false,
    //                 backdrop_path: null,
    //                 genre_ids: [
    //                   35,
    //                   53,
    //                   80,
    //                   9648
    //                 ],
    //                 id: 615295,
    //                 original_language: 'en',
    //                 original_title: 'Medias Res',
    //                 overview: 'test description',
    //                 popularity: 7.061,
    //                 poster_path: '/c6gn3HJT0QkiYUybZTqt0PkTgC1.jpg',
    //                 release_date: '2019-07-12',
    //                 title: 'Medias Res',
    //                 video: false,
    //                 vote_average: 5.3,
    //                 vote_count: 4
    //               }
    //         ]
    //     })
    //     expect(wrapper.find('MovieThumbnail').exists()).toEqual(true);
    // });
});
