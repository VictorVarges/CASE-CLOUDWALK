**2.1. Understand the Industry**

1. **Money Flow, Information Flow, and Main Players:**
   - Money Flow: In the payment industry, money flows from the cardholder to the merchant through a series of intermediaries. The process typically involves the cardholder, merchant, acquiring bank (acquirer), issuing bank (issuer), card networks (like Visa, Mastercard), and payment processors.
   - Information Flow: Information flows between these players to authorize and process transactions. This includes transaction details, authentication, and settlement information.
   - Main Players:
     - Cardholder: Individual making the purchase.
     - Merchant: Business selling goods/services.
     - Acquirer: Bank or financial institution that facilitates merchants in accepting card payments.
     - Issuer: Bank that issued the credit/debit card to the cardholder.
     - Payment Gateway: Facilitates the communication between the merchant, acquirer, and card networks.

2. **Differences between Acquirer, Sub-Acquirer, and Payment Gateway:**
   - Acquirer: Processes transactions for the merchant, facilitating funds transfer.
   - Sub-Acquirer: An intermediary between the merchant and the acquirer, often used in partnerships or specific business models.
   - Payment Gateway: Handles the secure transfer of transaction data between the merchant and acquirer, ensuring communication compatibility.

3. **Chargebacks, Cancellations, and Connection with Fraud:**
   - Chargebacks: A chargeback occurs when a cardholder disputes a transaction, claiming non-receipt of goods or services, fraud, etc. The funds are reversed from the merchant's account.
   - Cancellation: The voluntary cancellation of a transaction before it is settled.
   - Connection with Fraud: Chargebacks are often related to fraud when a cardholder denies making a legitimate transaction.

**2.2. Solve the Problem**

Considering the chargeback reason is "Product/Service not provided":
- Communicate with the client empathetically, expressing understanding.
- Request additional evidence of product delivery from the client.
- Investigate internally to gather any additional proof of product/service delivery.
- If evidence is conclusive, represent the case to the issuer with the new evidence.
- If not, consider options like offering a refund or replacement to the customer to resolve the issue amicably.

**3. Get Your Hands Dirty**

1. **Analysis of Transactional Data:**
   - Identify patterns where the same user (User_id) has multiple transactions with chargebacks (Has_cbk).
   - Look for anomalies in transaction amounts, frequencies, and locations.
   - Analyze device_id to identify suspicious behavior, such as multiple users sharing the same device.
   - Investigate transactions with chargebacks to find commonalities.
	 - Analyze if the user tried to make more than 5 transactions in one hour, leaving it dynamic in cases where Acquirer accepts more than 5 transactions
	 - Analyze if the user tried to make more than 3 transactions in one hour with a value greater than x

2. **Additional Data Consideration:**
   - IP addresses, geolocation data, and device fingerprints for enhanced user verification.
   - Behavioral analytics, considering the time of day, user habits, and transaction history.

3. **Suggestions to Prevent Fraud/Chargebacks:**
   - Implement real-time transaction monitoring and anomaly detection.
   - Enhance customer authentication methods.
   - Educate customers on secure practices and provide clear transaction details.
   - Periodic reviews of transactional data to identify evolving patterns.

**4. Create a Simple Anti-fraud**
The creation of the system is created in the files inside the SRC folder. Being a fraud system created using nodejs with integration in Mysql and software architecture based on MSC - Models, Services, Controllers.
