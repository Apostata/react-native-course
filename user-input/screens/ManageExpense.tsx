import { useContext, useLayoutEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import ExpenseForm from '../components/ManageExpenses/ExpensesForm';

import IconButton from '../components/UI/IconButton';
import { GlobalStyles } from '../constants/styles';
import { ExpensesContext } from '../store/expenses-context';


function ManageExpense({ route, navigation }) {
  const expensesCtx = useContext(ExpensesContext);

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  const currExpense = expensesCtx.expenses.find((expense)=>expense.id === editedExpenseId)

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {
    expensesCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  function confirmHandler(data:{amount:number, date:Date, description:string}) {
    if (isEditing) {
      expensesCtx.updateExpense(
        editedExpenseId,
        data
      );
    } else {
      expensesCtx.addExpense(data);
    }
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ExpenseForm 
        cancel={cancelHandler} 
        isEditing={isEditing}
        onSubmit={confirmHandler}
        expense={currExpense}
      />
      {isEditing && (
				<View style={styles.deleteContainer}>
				<IconButton
					icon="trash"
					color={GlobalStyles.colors.error500}
					size={36}
					onPress={deleteExpenseHandler}
				/>
				</View>
			)}
    </View>
  );
}

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
		marginTop: 16,
		paddingTop: 8,
		borderTopWidth: 2,
		borderTopColor: GlobalStyles.colors.primary200,
		alignItems: 'center',
  },
});
