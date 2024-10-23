import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Icons } from "../assets/Icons";
import { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs";

const TabBar: React.FC<BottomTabBarButtonProps> = ({ state, descriptors, navigation }) => {

  

  const primaryColor = "#9C9C9C";
  const greyColor = "#9C9C9C";
  return (
    <View style={styles.tabbar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
              : route.name;
        
           if(['_sitemap', '+not-found'].includes(route.name)) return null;
        

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.name}
            style={styles.tabbarItem}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >

            {
              Icons[route.name]({
                color: isFocused ? primaryColor : greyColor,
              })
            }

              {isFocused && <View style={styles.activeDash} />}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabbar: {
    position: 'absolute',
    bottom: 60,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    marginHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 45,
    borderCurve: 'continuous',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    paddingBottom:18,
  },
  tabbarItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    paddingVertical: 3,
    position: 'relative',  
  },
  activeDash: {
    width: 32,
    height: 5,
    backgroundColor: '#9472EA',
    marginTop: 1,
    position: 'absolute',
    bottom: -4,
    borderRadius:18,
    opacity:0.3,
  }
})

export default TabBar;
