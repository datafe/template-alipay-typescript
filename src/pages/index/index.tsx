import * as React from 'react';
import { View, Text, Image } from 'remax/alipay';
import styles from './index.module.css';

export default () => {
  return (
    <View className={styles.app}>
      <View className={styles.header}>
        <Image
          src="https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*OGyZSI087zkAAAAAAAAAAABkARQnAQ"
          className={styles.logo}
        />
        <View className={styles.text}>
          编辑 <Text className={styles.path}>src/pages/index/index.tsx</Text> 开始
        </View>
      </View>
    </View>
  );
};
