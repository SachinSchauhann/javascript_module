#include <iostream>
using namespace std;
class Mob{
	public:
//	void call(){
//		cout<<"call enable"<<endl;
		
	
	virtual void call()=0;
	virtual void massage()=0;
	virtual void camera()=0;
	
	
	
};

class A : public Mob{
	public:
		void call(){
			cout<<"you can call"<<endl;
		}
		
};

class B : public A{
	public:
		void massage(){
			cout<<"you can massage"<<endl;
		}
		
};

class C : public B{
	public:
		void camera(){
			cout<<"you can open camera"<<endl;
		}
		
};
int main()
 {
 	C ob;
 	ob.call();
 	ob.massage();
    ob.camera();
  
  return 0;
}
