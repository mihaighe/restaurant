import axios from 'axios'
import { TouchableOpacityBase } from 'react-native'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer UHbEtnE5WRJ7A6ax69h7uCwdnEuuMfM-Jw_1yahNu8YkLGAAr2RODeUM7DIa08_I-pi9AqHICFN5yGj0RPkIwh046av47ay9tb1Alqb2ghcAuAIX3pW4BXVBKIOOX3Yx'
    }
})


