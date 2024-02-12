#include<bits/stdc++.h>
using namespace std;

void print(int* arr, int n){

    for(int i = 0; i < n; i++) cout << arr[i] << " ";
}

void miss_duplicate(int* arr, int n){

    //Swap Sort: When array size is 1 to N
    int i = 0;

    while(i < n){

        if(arr[i] != arr[arr[i] - 1]) swap(arr[i], arr[arr[i] - 1]);
        else i++;
     
    }

    cout << "after swaping : ";
    print(arr, n);
    cout << endl;

    //Find Missing and Duplicate Number:
    for(int i = 0; i < n; i++){

        if(arr[i] !=  i + 1){
            cout << "Missing Number : " << i+1 << endl;
            cout << "Duplicate Number : " << arr[i] << endl;
        }
    }

}

int main(){

    int arr[] = {5, 6, 2, 1, 5, 3};
    miss_duplicate(arr, 6);
}
