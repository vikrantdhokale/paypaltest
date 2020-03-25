# Applicant Name: Vikrant Dhokle
## Interview: Paypal IPN Integration Test
## Interview Date: March 25, 2020

## Prerequisites:
Node v 10.8.0

## Dependencies
express: Node.js web application framework  
body-parser: Node.js body parsing middleware  
ngrok: As IPN handler URL cannot be localhost, ngrok was used to expose localhost to the internet. 

## Implementation Details
The project makes use of Paypal IPN Simulator https://developer.paypal.com/developer/ipnSimulator/ to simulate a payment.   
The app has a post method (route /ipn) that receives the IPN request and extracts the relevant info to send the email via the email service. 

