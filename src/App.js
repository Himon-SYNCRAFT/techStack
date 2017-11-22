import React from 'react'
import { View, UIManager } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
import { Header } from './components/common'
import LibaryList from './components/LibraryList'


UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true)

const App = () => (
    <Provider store={createStore(reducers)}>
        <View style={{ flex: 1 }}>
            <Header headerText="Tech Stack" />
            <LibaryList />
        </View>
    </Provider>
)

export default App
