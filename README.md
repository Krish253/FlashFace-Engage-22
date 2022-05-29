# FlashFace-Engage-22
Face-Recognition based website for matching criminals face 
  
 ## Frame work Libraries and Tech Stack
  
  - [Face Recognition Library (dlib)](https://github.com/davisking/dlib) 
  - [face-recognition library](https://github.com/ageitgey/face_recognition) 
  - [React JS + notus-react]
  - [Django Rest Framework](https://betterprogramming.pub/create-a-machine-learning-api-with-django-rest-framework-967571640c46) 
   
 ## Functionality 
 
 The main function of the app is to provide a criminal dtabase to the crime investigating department or police in which the criminal list along with it's details are stored.
 The app asks the user to input the image of a person which it thinks as a suspect to a crime and then matches the image to the existing database images and outputs whether any of those had any previous criminal records or not.
 This helps the user in reducing the suspect list and also gives valuable info to the police in very less time.
 It also helps them in editing criminals records, deleting information, adding new info into the database as well as viewing the database.
  
 To see the video demonstration, kindly use the below link to the YouTube Video. 
  
 Video Demonstration :  
  
 ## Tech Stack 
  
 **Frontend:** React, Notus React, Tailwind CSS  
  
 **Backend:** Django Rest Framework  
  
  
 ## Working:
  
 ![TechArch](https://tse1.mm.bing.net/th?id=OIP.bfT3jMKO47qrybTJOgLr2AHaDM&pid=Api&P=0&w=441&h=190) 
  
 ## How to Run The Project
  
 Clone the project 
  
 ```bash 
   git clone https://link-to-project 
 ``` 
  
 Open a terminal and perform the following tasks 
  
 **Start the backend server** 
  
 You can setup a virtual environment also (recommended) 
  
 Install dependencies and open the project with the following commands: 
 ```bash 
   cd Face-Recognition
   cd crime_detection 
   pip install -r requirements.txt 
   python manage.py makemigrations 
   python manage.py migrate 
   python manage.py runserver 
 ``` 
 
 **New Terminal**
  
 **Start the frontend client** 
  
 Install dependencies and open the project with the following commands: 
 ```bash 
   cd notus-react-main 
   npm install
   npm start 
 ``` 
  
 The project would open up on your browser. 
  
 ## Features 
  
 - `Dashboard` to view the stats 
 - `Get Database` : criminal records already entered into the system 
 - `Add Criminal` : To add criminals to the database along with specific details needed
 - `Patch/Delete` : To update criminal records to the database and Delete to delete any criminal data from the database 
 - Just upload the suspect image and get the `Test_image`, along  
     with the matched criminal names and the processed image would also have the respective name 
 - Found image `encodings` and saved it along with criminal details to the database to `save time`, as we only need to process the images in the database only once hence it saves a lot of time and speeds up the program 
 - It can even find `multiple criminals` in a single image hence is not restricted to only finding one criminal. 
 - When a image is not matched to any of the criminals it returns ` Match Not Found`
 - Sleek and beautiful `UI`, with `responsive` layout and features at each user 
     action on the webapp along with being easy to navigate
 - Efficient practices to reduce the time taken as well as to reduce the memory of the entire app so that it is convenient for the user. 
  
 ## Screenshots of UI 

 **User Dashboard**
 
 ![Dashboard](https://user-images.githubusercontent.com/76179296/170872673-7ff637b9-e553-4efb-a35e-d694822ee30c.jpg)
  
 **Get Data**
 
 ![Getdata](https://user-images.githubusercontent.com/76179296/170872816-5acf4212-9eff-4851-8306-67a7b71d405d.jpg)
  
 **Match Image**
  
 ![matchimage](https://user-images.githubusercontent.com/76179296/170872940-e02dcc3e-237a-4f95-92d2-61d61b1ef9ab.jpg)

 **Patch/Delete**
 
 ![Patch_Delete](https://user-images.githubusercontent.com/76179296/170873008-d61882d4-fca8-48be-a44b-7cf6c8a5aec0.jpg)

 **Enter Criminal**
 
 ![Enter_criminal](https://user-images.githubusercontent.com/76179296/170873087-5b2f1d1a-3b6e-418f-9cbf-f0b6294e8e8c.jpg)


 ## Programming Languages Used 
  
 - Python 
 - Javascript 
 - Tailwind CSS 
 - HTML 

 ## Timeline
 
 I used the scrum methodology to develop my project, i.e., used agile method of CI and CDD.
 
 The timeline goes as follows:
 
 ![Timeline](https://user-images.githubusercontent.com/76179296/170873221-49a656f3-1151-4847-b423-f4aa2838f05c.jpg)


 ## Future Goals:
  
 - 24 Hr CCTV Surveillance using Webcam which will aslo keep track of the people's movements. 
 - Missing object detection from a particular image or video.
 - Along with face recognition can implement detection of body features too.
  
 All of the above tasks are a bit more complex, and require more time. 
  
 # About Myself 👋 
 
 Myself Krishi Agrawal.
 
 I am a 2nd year Undergraduate Student in the Departement of Electrical Engineering at the Indian Institute of Technology, 
 Kharagpur. 
  
 I really like turning ideas into reality.
  
 Microsoft Engage 2022 has been a great learning experience for me as I learnt a lot in it, and  
 I would like to thank Acehacker and Microsoft for this amazing opportunity. 
  
 Do connect with me through LinkedIn or Email and message me your recommendations regarding  
 any improvements. 
  
 https://www.linkedin.com/in/krishi-agrawal-2a80b421a/
  
 ## License 
  
 Some of the visual code was used from an existing, free, and open project repository, whose license has been included below. 
  
 MIT License 
  
 © 2022 Krishi Agrawal <krishagarwal535@gmail.com> 
  
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
