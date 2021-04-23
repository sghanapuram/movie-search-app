import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import MovieThumbnail from './components/MovieThumbnail';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter });

describe('MovieThumbnail', () => {
    let wrapper;
    const props = {
        list: [
            {
                adult: false,
                backdrop_path: null,
                genre_ids: [
                  35,
                  53,
                  80,
                  9648
                ],
                id: 615295,
                original_language: 'en',
                original_title: 'Medias Res',
                overview: 'test description',
                popularity: 7.061,
                poster_path: '/c6gn3HJT0QkiYUybZTqt0PkTgC1.jpg',
                release_date: '2019-07-12',
                title: 'Medias Res',
                video: false,
                vote_average: 5.3,
                vote_count: 4
              }
        ]
    }
    beforeEach(() => {
        wrapper = shallow(<MovieThumbnail { ...props } />);
    });
    it('renders movie results', () => {
        expect(wrapper.find('.movie-results').exists()).toEqual(true);
        expect(wrapper.find('.movie-thumbnail').exists()).toEqual(true);
        expect(wrapper.find('.poster-section').exists()).toEqual(true);
        expect(wrapper.find('.movie-desc').exists()).toEqual(true);
        expect(wrapper.find('.title').text()).toEqual('Medias Res');
        expect(wrapper.find('.movie-id').text()).toEqual('615295');
        expect(wrapper.find('.overview').exists()).toEqual(true);
        expect(wrapper.find('.review-count').text()).toEqual('4 reviews');
    });
    it('renders read more - read less section', () => {
        expect(wrapper.find('ReactReadMoreReadLess').exists()).toEqual(true);
    });
    it('renders rating and review section', () => {
        expect(wrapper.find('WithStyles(ForwardRef(Rating))').exists()).toEqual(true);
        expect(wrapper.find('.review-count').text()).toEqual('4 reviews');
    });
});
