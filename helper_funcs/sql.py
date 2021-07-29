def dict_sql(cursor):
    """Create a dict with the column headers as the key value and the row/column data as the value"""
    return [dict(zip([column[0] for column in cursor.description], row))
             for row in cursor.fetchall()]