import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import RoundButton from "@/components/RoundButton";
import Dropdown from "@/components/Dropdown";
import { useBalanceStore } from "@/store/balanceStore";
import { defaultStyles } from "@/constants/Styles";
import { Ionicons } from "@expo/vector-icons";
import WidgetList from "@/components/SortableList/WidgetList";
// import { useHeaderHeight } from "@react-navigation/elements";

const Home = () => {
  // const headerHeight = useHeaderHeight();
  const { balance, runTransaction, transactions, clearTransactions } =
    useBalanceStore();
  const onAddMoney = () => {
    const amount =
      Math.floor(Math.random() * 1000) * (Math.random() > 0.5 ? 1 : -1);
    runTransaction({
      id: Math.random().toString(),
      amount,
      date: new Date(),
      title: amount > 0 ? "Added money" : "Sent Money",
    });
  };
  return (
    <ScrollView
      style={{ backgroundColor: Colors.background }}
      // contentContainerStyle={{ paddingTop: headerHeight }}
    >
      <View style={styles.account}>
        <View style={styles.row}>
          <Text style={styles.balance}>{balance()}</Text>
          <Text style={styles.currency}>$</Text>
        </View>
      </View>

      <View style={styles.actionRow}>
        <RoundButton text="Send" icon={"add"} onPress={onAddMoney} />
        <RoundButton
          text="Exchage"
          icon={"refresh"}
          onPress={clearTransactions}
        />
        <RoundButton text="Details" icon={"list"} onPress={() => {}} />
        <Dropdown />
      </View>

      <View>
        <Text style={defaultStyles.sectionHeader}>Transactions</Text>
        <View style={styles.transactions}>
          {transactions?.length === 0 ? (
            <Text style={{ padding: 14, color: Colors.gray }}>
              No transactions yet
            </Text>
          ) : (
            transactions
              .sort(
                (a, b) =>
                  new Date(b.date).getTime() - new Date(a.date).getTime()
              )
              .map((transaction) => (
                <View
                  key={transaction.id}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 16,
                  }}
                >
                  <View style={styles.circle}>
                    <Ionicons
                      name={transaction.amount > 0 ? "add" : "remove"}
                      size={24}
                      color={Colors.dark}
                    />
                  </View>
                  <View style={{ flex: 1, gap: 2 }}>
                    <Text style={{ fontWeight: "400" }}>
                      {transaction.title}
                    </Text>
                    <Text style={{ color: Colors.gray, fontSize: 12 }}>
                      {new Date(transaction?.date)?.toLocaleDateString()},
                      {new Date(transaction?.date)?.toLocaleTimeString()}
                    </Text>
                  </View>
                  <Text>{transaction.amount}$</Text>
                </View>
              ))
          )}
        </View>
      </View>

      <View>
        <Text style={defaultStyles.sectionHeader}>Widgets</Text>
        <WidgetList />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  account: {
    margin: 50,
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  balance: {
    fontSize: 50,
    fontWeight: "bold",
  },
  currency: {
    fontSize: 30,
    marginLeft: 5,
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  transactions: {
    marginHorizontal: 20,
    padding: 14,
    backgroundColor: "#fff",
    borderRadius: 16,
    gap: 20,
  },
  circle: {
    width: 36,
    height: 36,
    borderRadius: 30,
    backgroundColor: Colors.lightGray,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Home;
