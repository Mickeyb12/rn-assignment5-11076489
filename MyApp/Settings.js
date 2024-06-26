import React, { useContext } from 'react';
import { StyleSheet, View, Text, Switch } from 'react-native';
import { ThemeContext } from './ThemeContext';

const SettingsPage = () => {
  const { theme, toggleTheme, isDarkTheme } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.header}>
        <Text style={[styles.settingsText, { color: theme.text }]}>Settings</Text>
      </View>

      {/* List items */}
      <View style={styles.listContainer}>
        <View style={styles.listItem}>
          <Text style={[styles.listItemText, { color: theme.text }]}>Language</Text>
          <Text style={styles.arrow}>{'>'}</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={[styles.listItemText, { color: theme.text }]}>My Profile</Text>
          <Text style={styles.arrow}>{'>'}</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={[styles.listItemText, { color: theme.text }]}>Contact Us</Text>
          <Text style={styles.arrow}>{'>'}</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={[styles.listItemText, { color: theme.text }]}>Change Password</Text>
          <Text style={styles.arrow}>{'>'}</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={[styles.listItemText, { color: theme.text }]}>Privacy Policy</Text>
          <Text style={styles.arrow}>{'>'}</Text>
        </View>
      </View>

      {/* Themes section */}
      <View style={styles.themesSection}>
        <Text style={[styles.themesText, { color: theme.text }]}>Themes</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#90EE90" }}
          thumbColor={isDarkTheme ? "white" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleTheme}
          value={isDarkTheme}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  settingsText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 50,
  },
  listContainer: {
    marginTop: 20,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingHorizontal: 20,
  },
  listItemText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  arrow: {
    fontSize: 22,
    color: 'gray',
  },
  themesSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 15,
  },
  themesText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default SettingsPage;
