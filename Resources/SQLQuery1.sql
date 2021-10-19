SET IDENTITY_INSERT TradeOrdersTypes ON;  
INSERT INTO TradeOrdersTypes(Id, Name) VALUES (1, N'Buy')
INSERT INTO TradeOrdersTypes(Id, Name) VALUES (2, N'Sell')
GO
SET IDENTITY_INSERT TradeOrdersTypes OFF;  
GO

SET IDENTITY_INSERT OperationTypes ON;  
INSERT OperationTypes (Id, Name) VALUES (1, N'Deposit')
INSERT OperationTypes (Id, Name) VALUES (2, N'Withdrawal')
INSERT OperationTypes (Id, Name) VALUES (3, N'TradeOrder')
GO
SET IDENTITY_INSERT OperationTypes OFF;  
GO

SET IDENTITY_INSERT Operations ON;  
INSERT Operations (Id, OperationTypesId, Amount) VALUES (1, 1, CAST(1000.000000000 AS Decimal(18, 9)))
INSERT Operations (Id, OperationTypesId, Amount) VALUES (2, 3, CAST(-500.000000000 AS Decimal(18, 9)))
INSERT Operations (Id, OperationTypesId, Amount) VALUES (3, 3, CAST(-200.000000000 AS Decimal(18, 9)))
INSERT Operations (Id, OperationTypesId, Amount) VALUES (4, 3, CAST(-300.000000000 AS Decimal(18, 9)))
INSERT Operations (Id, OperationTypesId, Amount) VALUES (5, 3, CAST(1000.000000000 AS Decimal(18, 9)))
INSERT Operations (Id, OperationTypesId, Amount) VALUES (6, 3, CAST(600.000000000 AS Decimal(18, 9)))
INSERT Operations (Id, OperationTypesId, Amount) VALUES (7, 3, CAST(450.000000000 AS Decimal(18, 9)))
INSERT Operations (Id, OperationTypesId, Amount) VALUES (8, 2, CAST(-500.000000000 AS Decimal(18, 9)))
INSERT Operations (Id, OperationTypesId, Amount) VALUES (9, 3, CAST(-400.000000000 AS Decimal(18, 9)))
INSERT Operations (Id, OperationTypesId, Amount) VALUES (10, 3, CAST(-200.000000000 AS Decimal(18, 9)))
INSERT Operations (Id, OperationTypesId, Amount) VALUES (11, 3, CAST(-700.000000000 AS Decimal(18, 9)))
INSERT Operations (Id, OperationTypesId, Amount) VALUES (12, 3, CAST(800.000000000 AS Decimal(18, 9)))
INSERT Operations (Id, OperationTypesId, Amount) VALUES (13, 3, CAST(100.000000000 AS Decimal(18, 9)))
INSERT Operations (Id, OperationTypesId, Amount) VALUES (14, 1, CAST(5000.000000000 AS Decimal(18, 9)))
INSERT Operations (Id, OperationTypesId, Amount) VALUES (15, 3, CAST(-4000.000000000 AS Decimal(18, 9)))
INSERT Operations (Id, OperationTypesId, Amount) VALUES (16, 3, CAST(-1500.000000000 AS Decimal(18, 9)))
INSERT Operations (Id, OperationTypesId, Amount) VALUES (17, 3, CAST(8000.000000000 AS Decimal(18, 9)))
INSERT Operations (Id, OperationTypesId, Amount) VALUES (18, 2, CAST(-5000.000000000 AS Decimal(18, 9)))
SET IDENTITY_INSERT Operations OFF;  
GO

SET IDENTITY_INSERT TradeOrders ON;  
INSERT TradeOrders (Id, OperationsId, Amount, TradeOrdersTypesId) VALUES (1, 2, CAST(-500.000000000 AS Decimal(18, 9)), 2)
INSERT TradeOrders (Id, OperationsId, Amount, TradeOrdersTypesId) VALUES (2, 3, CAST(-200.000000000 AS Decimal(18, 9)), 2)
INSERT TradeOrders (Id, OperationsId, Amount, TradeOrdersTypesId) VALUES (3, 4, CAST(-300.000000000 AS Decimal(18, 9)), 2)
INSERT TradeOrders (Id, OperationsId, Amount, TradeOrdersTypesId) VALUES (4, 5, CAST(1000.000000000 AS Decimal(18, 9)), 1)
INSERT TradeOrders (Id, OperationsId, Amount, TradeOrdersTypesId) VALUES (5, 6, CAST(600.000000000 AS Decimal(18, 9)), 1)
INSERT TradeOrders (Id, OperationsId, Amount, TradeOrdersTypesId) VALUES (6, 7, CAST(450.000000000 AS Decimal(18, 9)), 1)
INSERT TradeOrders (Id, OperationsId, Amount, TradeOrdersTypesId) VALUES (7, 9, CAST(-400.000000000 AS Decimal(18, 9)), 2)
INSERT TradeOrders (Id, OperationsId, Amount, TradeOrdersTypesId) VALUES (8, 10, CAST(-200.000000000 AS Decimal(18, 9)), 2)
INSERT TradeOrders (Id, OperationsId, Amount, TradeOrdersTypesId) VALUES (9, 11, CAST(-700.000000000 AS Decimal(18, 9)), 2)
INSERT TradeOrders (Id, OperationsId, Amount, TradeOrdersTypesId) VALUES (10, 12, CAST(800.000000000 AS Decimal(18, 9)), 1)
INSERT TradeOrders (Id, OperationsId, Amount, TradeOrdersTypesId) VALUES (11, 13, CAST(100.000000000 AS Decimal(18, 9)), 1)
INSERT TradeOrders (Id, OperationsId, Amount, TradeOrdersTypesId) VALUES (12, 15, CAST(-4000.000000000 AS Decimal(18, 9)), 2)
INSERT TradeOrders (Id, OperationsId, Amount, TradeOrdersTypesId) VALUES (13, 16, CAST(-1500.000000000 AS Decimal(18, 9)), 2)
INSERT TradeOrders (Id, OperationsId, Amount, TradeOrdersTypesId) VALUES (14, 17, CAST(8000.000000000 AS Decimal(18, 9)), 1)
SET IDENTITY_INSERT TradeOrders OFF;  
GO

SET IDENTITY_INSERT Deposits ON;  
INSERT Deposits (Id, OperationsId, Amount, FromAddress) VALUES (1, 1, CAST(1000.000000000 AS Decimal(18, 9)), N'0xdac17f958d2ee523a2206206994597c13d831ec7')
INSERT Deposits (Id, OperationsId, Amount, FromAddress) VALUES (2, 14, CAST(5000.000000000 AS Decimal(18, 9)), N'0xdac17f958d2ee523a2206206994597c13d831ec7')
SET IDENTITY_INSERT Deposits OFF;  
GO

SET IDENTITY_INSERT Withdrawals ON;  
INSERT Withdrawals (Id, OperationsId, Amount, WasApprovedByUser2FA, ToAddress) VALUES (1, 8, CAST(-500.000000000 AS Decimal(18, 9)), 1, N'0xdac17f958d2ee523a2206206994597c13d831ec7')
INSERT Withdrawals (Id, OperationsId, Amount, WasApprovedByUser2FA, ToAddress) VALUES (2, 18, CAST(-5000.000000000 AS Decimal(18, 9)), 0, N'0xdac17f958d2ee523a2206206994597c13d831ec7')
SET IDENTITY_INSERT Withdrawals OFF;  
GO
