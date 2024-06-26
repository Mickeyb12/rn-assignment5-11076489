import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import Profile from './assets/profile.png';
import SearchIcon from './assets/search.png';
import MasterCard from './assets/Card.png';
import SentIcon from './assets/send.png'; 
import ReceiveIcon from './assets/recieve.png';
import LoanIcon from './assets/loan.png';
import TopupIcon from './assets/topUp.png';

const { width: screenWidth } = Dimensions.get('window');

export default function Home({ name }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.profileContainer}>
            <Image source={Profile} style={styles.profilePicture} />
          </View>
          <View style={styles.welcomeTextContainer}>
            <Text style={styles.welcomeText}>Welcome back,</Text>
            <Text style={styles.userName}>{name}</Text>
          </View>
          <TouchableOpacity style={styles.searchButton}>
            <Image source={SearchIcon} style={styles.searchIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.masterCardContainer}>
          <Image source={MasterCard} style={styles.masterCard} />
        </View>
        <View style={[styles.rowContainer, { marginTop: 20 }]}>
          <View style={styles.iconContainer}>
            <View style={styles.iconBackground}>
              <Image source={SentIcon} style={styles.icon} />
            </View>
            <Text style={styles.iconText}>Sent</Text>
          </View>
          <View style={styles.iconContainer}>
            <View style={styles.iconBackground}>
              <Image source={ReceiveIcon} style={styles.icon} />
            </View>
            <Text style={styles.iconText}>Receive</Text>
          </View>
          <View style={styles.iconContainer}>
            <View style={styles.iconBackground}>
              <Image source={LoanIcon} style={styles.icon} />
            </View>
            <Text style={styles.iconText}>Loan</Text>
          </View>
          <View style={styles.iconContainer}>
            <View style={styles.iconBackground}>
              <Image source={TopupIcon} style={styles.icon} />
            </View>
            <Text style={styles.iconText}>Topup</Text>
          </View>
        </View>
        <View style={styles.transactionTextContainer}>
          <Text style={styles.transactionText}>Transaction</Text>
          <TouchableOpacity>
            <Text style={[styles.seeAllText, { color: 'blue' }]}>See All</Text>
          </TouchableOpacity>
        </View>
        {/* List items */}
        <View style={styles.sectionContainer}>
          <View style={styles.rowContainer}>
            <View style={styles.listItem}>
              <Image source={require('./assets/apple.png')} style={styles.image} />
              <View style={styles.itemTextContainer}>
                <Text style={styles.itemText}>Apple Store</Text>
                <Text style={styles.subText}>Entertainment</Text>
              </View>
              <Text style={styles.amountText}>-$5.99</Text>
            </View>
          </View>
          <View style={styles.rowContainer}>
            <View style={styles.listItem}>
              <Image source={require('./assets/spotify.png')} style={styles.image} />
              <View style={styles.itemTextContainer}>
                <Text style={styles.itemText}>Spotify</Text>
                <Text style={styles.subText}>Music</Text>
              </View>
              <Text style={styles.amountText}>-$9.99</Text>
            </View>
          </View>
          <View style={styles.rowContainer}>
            <View style={styles.listItem}>
              <Image source={require('./assets/moneyTransfer.png')} style={styles.image} />
              <View style={styles.itemTextContainer}>
                <Text style={[styles.itemText, { color: 'black' }]}>Money Transfer</Text>
                <Text style={styles.subText}>Transfer</Text>
              </View>
              <Text style={[styles.amountText, { color: 'blue' }]}>$50.00</Text>
            </View>
          </View>
          <View style={styles.rowContainer}>
            <View style={styles.listItem}>
              <Image source={require('./assets/grocery.png')} style={styles.image} />
              <View style={styles.itemTextContainer}>
                <Text style={styles.itemText}>Grocery</Text>
                <Text style={styles.subText}>Food</Text>
              </View>
              <Text style={styles.amountText}>-$25.00</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  profileContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 25,
    overflow: 'hidden', 
    marginRight: 15,
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  welcomeTextContainer: {
    flex: 1,
  },
  welcomeText: {
    color: 'gray',
    fontSize: 18,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 22,
    color: 'black',
  },
  searchButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
  masterCardContainer: {
    marginTop: 5,
    width: '100%',
    aspectRatio: 1.8,
    borderRadius: 20,
    overflow: 'hidden', 
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  masterCard: {
    width: screenWidth - 20,
    height: undefined,
    aspectRatio: 1.8,
    resizeMode: 'cover',
  },
  sectionContainer: {
    marginTop: 2,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: '100%',
    backgroundColor: '#fff',
  },
  image: {
    width: 35,
    height: 18,
    resizeMode: 'contain',
    borderRadius: 50,
    marginRight: 8,
    marginLeft: -20,
  },
  itemTextContainer: {
    flex: 1,
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  subText: {
    fontSize: 12,
    color: 'gray',
  },
  amountText: {
    fontSize: 17,
    color: 'black',
    textAlign: 'right',
    fontWeight: 'bold',
  },
  iconContainer: {
    alignItems: 'center',
    width: '22%',
  },
  iconBackground: {
    backgroundColor: '#f0f0f0',
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  icon: {
    width: 30,
    height: 20,
    resizeMode: 'contain',
  },
  iconText: {
    marginTop: 8,
    fontSize: 14,
    textAlign: 'center',
    color: 'black',
  },
  transactionTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
    paddingHorizontal: 13,
  },
  transactionText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black', 
  },
  seeAllText: {
    fontSize: 17,
    marginRight: 10,
    color: 'blue',
  },
});
