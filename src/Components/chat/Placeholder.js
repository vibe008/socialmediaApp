import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
// import SkeletonContent from 'react-native-skeleton-content';

const Placeholder = () => {
    const [loading, setLoading] = useState(true)
    return (
        <>
            <SkeletonContent
                // containerStyle={{ flex: 1, width: 300 }}
                isLoading={true}
                // layout={[
                //     { key: 'someId', width: 220, height: 20, marginBottom: 6 },
                //     { key: 'someOtherId', width: 180, height: 20, marginBottom: 6 }
                // ]}
            >
                {/* <Text style={styles.normalText}>Your content</Text>
                <Text style={styles.bigText}>Other content</Text> */}
            </SkeletonContent>
        </>
    )
}

export default Placeholder
