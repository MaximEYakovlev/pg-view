'CREATE VIEW unforgettableName AS SELECT someColumn FROM anyTable;'

'CREATE MATERIALIZED VIEW hardToForgetName AS SELECT someColumn FROM anyTable;'

'CREATE RECURSIVE VIEW public.nums_1_100 (n) AS VALUES (1) UNION ALL SELECT n+1 FROM nums_1_100 WHERE n < 100;'