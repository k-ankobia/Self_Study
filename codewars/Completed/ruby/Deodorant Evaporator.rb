##Deodorant Evaporator

def evaporator(content, evap_per_day, threshold)
    days = 0
    amount_threshold = content * threshold / 100.0
    while (content > amount_threshold) do
        content = content - content * evap_per_day / 100.0
        days += 1
    end
    days
end