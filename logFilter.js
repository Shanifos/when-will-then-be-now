function filterLogsByEnv(logs, env) {
  const filteredLogs = []

  logs.forEach(log => {
    if (log.environment === env) {
      filteredLogs.push(log)
    }
  })

  return filteredLogs
}

function filterLogsOnDate(logs, dateFilter) {
  const filteredLogs = []
  let parsedDateFilter = new Date(dateFilter)
  parsedDateFilter = new Date(
    parsedDateFilter.getFullYear(),
    parsedDateFilter.getUTCDate(),
    parsedDateFilter.getUTCDay()
  )

  logs.forEach(log => {
    let timestampDate = new Date(log.timestamp)
    timestampDate = new Date(
      timestampDate.getFullYear(),
      timestampDate.getUTCDate(),
      timestampDate.getUTCDay()
    )

    if (parsedDateFilter.toString() === timestampDate.toString()) {
      filteredLogs.push(log)
    }
  })

  return filteredLogs
}

function filterLogs(logs, env, dateFilter) {
  const envLogs = filterLogsByEnv(logs, env)

  if (dateFilter) {
    return filterLogsOnDate(envLogs, dateFilter)
  } else {
    return envLogs
  }
}

module.exports = filterLogs
